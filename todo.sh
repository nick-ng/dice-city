#!/bin/bash

sed -i -e '/### ToDo Comments/q' README.md

echo '' >> README.md

git grep -n "// @todo" -- ':!todo.sh' ':!package.json' ':!README.md' | sed 's/^/- /m ; s/\/\/ @/ @/m ; s/\s\+/ /gm' >> README.md

git add ./README.md
