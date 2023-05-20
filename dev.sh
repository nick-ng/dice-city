#!/bin/bash

export NODE_ENV=development
export TS_NODE_PROJECT='./src-back/tsconfig.json'

echo "Also run npm start and npm run dev-logs"

node ./esbuild.js
