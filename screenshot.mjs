import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: {
    width: 1440,
    height: 900
  }
});

await page.goto('http://localhost:3000', {
  waitUntil: 'networkidle'
});

await page.screenshot({
  path: 'screenshots/home.png',
  fullPage: true
});

await browser.close();
