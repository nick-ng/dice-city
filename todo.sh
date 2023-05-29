#!/bin/bash

# Populate README.md with ToDos

sed -i -e '/### Specific ToDos/q' README.md

echo "" >> README.md
git grep -n "@todo:" | sed 's/^/- /m' >> README.md
