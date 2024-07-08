import sys
from websockets.sync.client import connect
import datetime
from lib import write_to_file

def main(report):
    write_to_file('log.txt', f"{datetime.datetime.now()}: Cypress Reporter main reached with report ... {report} \n")
    with connect("ws://0.0.0.0:8765") as websocket:
        websocket.send(f"logger.{report}")
        message = websocket.recv()
        log = f"Logger console, received from socker server... {message}"
        write_to_file('log.txt', f"{datetime.datetime.now()}: {log} \n")
        print(log)


if __name__ == "__main__":
    a = str(sys.argv[1])
    main(a)

