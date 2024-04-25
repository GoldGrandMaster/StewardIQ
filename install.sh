#!/bin/bash

# Step 1: Change directory to the root directory
bash -c 'cd /workspace && yarn install && cd /workspace/stewardiq/frontend && yarn install; exec bash' &

bash -c 'cd /workspace/stewardiq/backend && pip install poetry && poetry shell && poetry install; exec bash'


