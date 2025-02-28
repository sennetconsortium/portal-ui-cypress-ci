FROM ubuntu:latest

WORKDIR /portal_ui_ci

COPY . .

# Install required packages for Cypress
RUN apt-get update && apt-get install -y libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb

# Install the usual
RUN apt-get update && apt-get install -y \
     python3 \
     python3-pip \
     python3.12-venv \
     vim \
     nodejs \
     npm

# Set up a new python envioronment
RUN python3 -m venv .venv
RUN . .venv/bin/activate
RUN apt-get autoclean
RUN apt install -y python3-websockets

RUN npm install .

EXPOSE 8765

CMD ["python3", "ci/main.py"]