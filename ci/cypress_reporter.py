import sys
import websockets
import datetime
from lib import write_to_file
import asyncio
from concurrent.futures import TimeoutError as ConnectionTimeoutError


async def main(report):
    write_to_file('log.txt', f"{datetime.datetime.now()}: Cypress Reporter main reached with report ... {report} \n")

    try:
        # make connection attempt
        websocket = await asyncio.wait_for(websockets.connect("ws://0.0.0.0:8765"), 20)
        await websocket.send(f"logger.{report}")
        message = await websocket.recv()
        log = f"{datetime.datetime.now()}: Cypress Reporter > received from socker server... {message}"
        write_to_file('log.txt', f"{log} \n")
        print(log)

    except ConnectionTimeoutError as e:
        # handle error
        log = f"{datetime.datetime.now()}: Cypress Reporter > Error connecting to socket. "
        write_to_file('error.txt', f"{log} \n")
        print(log)


if __name__ == "__main__":
    a = str(sys.argv[1])
    asyncio.get_event_loop().run_until_complete(main(a))

