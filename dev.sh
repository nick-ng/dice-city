#!/bin/bash

export NODE_ENV=development
export TS_NODE_PROJECT='./src-back/tsconfig.json'

npm i esbuild

node ./esbuild.js & nodemon -L ./dist-back/main.js"
