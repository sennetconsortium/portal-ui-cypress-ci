#!/usr/bin/env python

import asyncio
import json
import sys

from websockets.server import serve

from observer import CypressReportsObserver
from watchdog.observers import Observer
import subprocess
import threading

observer = None


def get_report(path):
    f = open(path)
    data = json.load(f)
    f.close()
    return data


def run_cypress():
    subprocess.run(["npm", "run", "cli"])


def is_job_thread_running(job_name):
    is_running = False
    thread = None
    for th in threading.enumerate():
        if th.name == job_name:
            is_running = True
            thread = th
            break

    return {'is_running': is_running, 'thread': thread}


def handle_cypress_thread():
    job_name = 'run_cypress'
    thread_details = is_job_thread_running(job_name)
    th = thread_details.get('thread')
    # if th is not None:
    #     sys.exit()

    threading.Thread(target=run_cypress, daemon=True, name=job_name).start()


async def echo(websocket):
    global observer

    async for message in websocket:
        result = None
        try:
            handle_cypress_thread()

            async def observer_callback(data):
                try:
                    data['report'] = get_report(data.get('path'))
                    await websocket.send(json.dumps(data))
                    if 'complete.json' in data.get('path'):
                        observer.stop()

                except Exception as e2:
                    print('Exception', e2)
                    if observer is not None:
                        observer.stop()

            event_handler = CypressReportsObserver()
            event_handler.websocket = websocket
            event_handler.callback = observer_callback
            if observer is None:
                observer = Observer()
                observer.schedule(event_handler, path='/portal_ui_ci/logs/', recursive=True)
                observer.start()

            await websocket.send(json.dumps({
                'message': f"Received message. {message}"
            }))
            if observer is not None:
                observer.join()
        except Exception as e:
            result = {
                'error': str(e)
            }
            if observer is not None:
                observer.stop()
        if result is not None:
            await websocket.send(json.dumps(result))


async def main():
    async with serve(echo, "0.0.0.0", 8765):
        print('Serving cypress socket ...')
        await asyncio.Future()  # run forever

asyncio.run(main())
