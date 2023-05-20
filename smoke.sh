#!/bin/bash

docker compose down
PORT=3013 API_ORIGIN=http://localhost:3013 docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml build --build-arg API_ORIGIN="http://localhost:3013"
PORT=3013 API_ORIGIN=http://localhost:3013 docker compose -f docker-compose.prod.yml up -d
