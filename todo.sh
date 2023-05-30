#!/bin/bash

# Populate README.md with ToDos

sed -i -e '/### Specific ToDos/q' README.md

echo "" >> README.md
git grep -n "@todo" -- ':!todo.sh' ':!package.json' ':!README.md' | sed 's/^/- /m' >> README.md

git add ./README.md
git commit --amend --no-edit --no-verify
