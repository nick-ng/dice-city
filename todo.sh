#!/bin/bash

sed -i -e '/### ToDo Comments/q' README.md

echo '' >> README.md

rg "// @todo" -n -g '!todo.sh' -g '!package.json' -g '!README.md' | sed 's/^/- /m ; s/\/\/ @/ @/m ; s/\s\+/ /gm' >> README.md

git add ./README.md
