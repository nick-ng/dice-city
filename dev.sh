#!/bin/bash

export NODE_ENV=development
export TS_NODE_PROJECT='./src-back/tsconfig.json'

node ./esbuild.js
