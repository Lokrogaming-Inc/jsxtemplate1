import { chromium } from 'playwright';
import fs from 'fs';

const routes = [
  { path: '/', name: 'home' },
  { path: '/contact', name: 'contact' },
  { path: '/team', name: 'team' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' }
];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: {
    width: 1440,
    height: 900
  }
});

// optional: folder sicherstellen
if (!fs.existsSync('screenshots')) {
  fs.mkdirSync('screenshots');
}

for (const route of routes) {
await page.goto(`http://localhost:3000${route.path}`, {
waitUntil: 'domcontentloaded'
});

// warten bis JS fertig + Layout stabil
 await page.waitForLoadState('networkidle').catch(() => {});
await page.waitForTimeout(3000);

await page.screenshot({
path: `screenshots/${route.name}.png`,
fullPage: true
});

console.log(`Screenshot saved: ${route.name}`);
}

await browser.close();
