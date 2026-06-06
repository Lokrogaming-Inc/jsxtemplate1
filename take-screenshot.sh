#!/data/data/com.termux/files/usr/bin/bash

mkdir -p screenshots

cat > screenshot.mjs <<'EOF'
import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true
});

const page = await browser.newPage({
  viewport: {
    width: 1440,
    height: 900
  }
});

await page.goto('http://localhost:5173/contact', {
  waitUntil: 'networkidle'
});

await page.screenshot({
  path: 'screenshots/contact.png',
  fullPage: true
});

await browser.close();
EOF

node screenshot.mjs

rm screenshot.mjs

echo "✅ Screenshot gespeichert: screenshots/home.png"
