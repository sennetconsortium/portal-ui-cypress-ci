FROM node:20.5.0

WORKDIR /portal_ui_ci

COPY . .

RUN apt-get update && apt-get install -y \
    vim

RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Install Python
RUN apt-get update && \
    apt-get install -y python3-full python3-pip python3.11-venv

RUN python3 -m venv .venv
RUN . .venv/bin/activate
# RUN pip install --upgrade pip -r ci/requirements.txt
RUN apt install -y python3-watchdog
RUN apt install -y python3-websockets

RUN npm install .

EXPOSE 8765

CMD ["python3", "ci/main.py"]