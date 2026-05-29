#!/data/data/com.termux/files/usr/bin/bash

./update-readme.sh
git add .
git commit -m "Auto update"
git push
