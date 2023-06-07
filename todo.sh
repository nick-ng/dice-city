#!/bin/bash

sed -i -e '/### ToDo Comments/q' README.md

echo '' >> README.md

git grep -n "@todo" -- ':!todo.sh' ':!package.json' ':!README.md' | sed 's/^/- /m' >> README.md

git add ./README.md
