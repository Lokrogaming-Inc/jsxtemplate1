#!/data/data/com.termux/files/usr/bin/bash

echo "## Projektstruktur" > STRUCTURE.md
echo '```text' >> STRUCTURE.md
tree -L 3 -I 'node_modules|dist|.git' >> STRUCTURE.md
echo '```' >> STRUCTURE.md
