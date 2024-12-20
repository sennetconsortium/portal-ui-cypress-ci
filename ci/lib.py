import os


def write_to_file(file, msg, path='ci/logs/', mode = 'a+'):
    f = open(f"{os.getcwd()}/{path}{file}", mode)
    f.write(f"{msg}\n")
    f.close()