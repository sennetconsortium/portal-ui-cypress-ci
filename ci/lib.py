import os


def write_to_file(file, msg):
    f = open(f"{os.getcwd()}/ci/logs/{file}", 'a+')
    f.write(f"{msg}\n")
    f.close()