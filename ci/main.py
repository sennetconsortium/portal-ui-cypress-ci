import asyncio
import json
import websockets
from websockets.server import serve
from lib import write_to_file

import subprocess
import threading
import base64
import datetime
import os
import signal

USERS = set()
cypress_process = None


def run_cypress():
    global cypress_process
    cypress_process = subprocess.Popen('npm run cli', shell=True)
    return


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
    global cypress_process

    job_name = 'run_cypress'
    thread_details = is_job_thread_running(job_name)
    th = thread_details.get('thread')
    running = threading.Event()
    running.set()
    if th is not None:
        if cypress_process is not None:
            os.kill(cypress_process.pid, signal.SIGINT)
        running.clear()

    curr = threading.Thread(target=run_cypress, daemon=True, name=job_name)
    curr.start()
    curr.join()


async def echo(websocket):
    global USERS

    USERS.add(websocket)

    try:
        await websocket.send(json.dumps({
            'message': f"Connection established ..."
        }))

        async for message in websocket:
            try:
                await websocket.send(json.dumps({
                    'message': f"Received message. {message}"
                }))

                if 'logger.' in message:
                    r = base64.b64decode(message[7:])
                    report = r.decode('utf-8')
                    websockets.broadcast(USERS, json.dumps({
                        'report': json.loads(report)
                    }))
                else:
                    handle_cypress_thread()
            except Exception as e2:
                websockets.broadcast(USERS, str(e2))

    except Exception as e:
        write_to_file('error.txt', f"{datetime.datetime.now()}: {str(e)}")
    finally:
        USERS.remove(websocket)


async def main():
    async with serve(echo, "0.0.0.0", 8765):
        write_to_file('log.txt', f"{datetime.datetime.now()}: SERVING CYPRESS SOCKET on port 8765 ... ")
        await asyncio.Future()  # run forever


asyncio.run(main())