from watchdog.events import FileSystemEventHandler
import asyncio


class CypressReportsObserver(FileSystemEventHandler):
    websocket = None
    callback = None

    async def run_callback(self, event, action):
        message = {
            'action': action,
            'path': event.src_path
        }
        asyncio.create_task(self.callback(message))

    def on_modified(self, event):
        asyncio.run(self.run_callback(event, 'modified'))
        print(f'File {event.src_path} has been modified')

    def on_created(self, event):
        asyncio.run(self.run_callback(event, 'created'))
        print(f'File {event.src_path} has been created')

    def on_deleted(self, event):
        asyncio.run(self.run_callback(event, 'deleted'))
        print(f'File {event.src_path} has been deleted')