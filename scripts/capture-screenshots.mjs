import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const brainScreenshotDir = 'C:/Users/jnikh/.gemini/antigravity/brain/cf18ee15-b4ea-493a-8998-e704823ac6f3/screenshots';
const localScreenshotDir = path.join(rootDir, 'public', 'screenshots');

if (!fs.existsSync(brainScreenshotDir)) {
  fs.mkdirSync(brainScreenshotDir, { recursive: true });
}
if (!fs.existsSync(localScreenshotDir)) {
  fs.mkdirSync(localScreenshotDir, { recursive: true });
}

function saveScreenshot(sourceBuffer, filename) {
  const localPath = path.join(localScreenshotDir, filename);
  const brainPath = path.join(brainScreenshotDir, filename);
  fs.writeFileSync(localPath, sourceBuffer);
  fs.writeFileSync(brainPath, sourceBuffer);
  console.log(`Saved screenshot: ${filename}`);
}

async function run() {
  console.log('Starting preview server...');
  const previewProcess = spawn('npm', ['run', 'preview', '--', '--port', '3000', '--host'], {
    cwd: rootDir,
    stdio: 'pipe',
    shell: true,
  });

  await new Promise((resolve) => setTimeout(resolve, 4000));

  const browser = await chromium.launch();
  try {
    // 1. Desktop 1440x900 Context
    console.log('Capturing Desktop 1440px screenshots...');
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(1000);

    // Fullpage Desktop (with navbar)
    const fullpageBuf = await desktopPage.screenshot({ fullPage: true });
    saveScreenshot(fullpageBuf, 'desktop-fullpage.png');

    // Hero Section (with navbar)
    const heroEl = desktopPage.locator('#top');
    const heroBuf = await heroEl.screenshot();
    saveScreenshot(heroBuf, 'hero-section.png');

    // For individual section captures, temporarily hide fixed navbar so it does not overlap section headings
    await desktopPage.evaluate(() => {
      const header = document.querySelector('header');
      if (header) header.style.display = 'none';
    });

    // Competitions Section
    const compEl = desktopPage.locator('#competitions');
    await compEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const compBuf = await compEl.screenshot();
    saveScreenshot(compBuf, 'competition-section.png');

    // Workshops Section
    const wsEl = desktopPage.locator('#workshops');
    await wsEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const wsBuf = await wsEl.screenshot();
    saveScreenshot(wsBuf, 'workshop-section.png');

    // Summit Section
    const summitEl = desktopPage.locator('#summit');
    await summitEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const summitBuf = await summitEl.screenshot();
    saveScreenshot(summitBuf, 'summit-section.png');

    // Venue & Stay Section
    const venueEl = desktopPage.locator('#venue');
    await venueEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const venueBuf = await venueEl.screenshot();
    saveScreenshot(venueBuf, 'venue-stay-section.png');

    // Final CTA Section
    const finalCtaEl = desktopPage.locator('#final-cta');
    await finalCtaEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const finalCtaBuf = await finalCtaEl.screenshot();
    saveScreenshot(finalCtaBuf, 'final-cta-section.png');

    // Footer
    const footerEl = desktopPage.locator('footer');
    await footerEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const footerBuf = await footerEl.screenshot();
    saveScreenshot(footerBuf, 'footer-section.png');

    await desktopPage.close();

    // 2. Mobile 375px Context (iPhone SE / X)
    console.log('Capturing Mobile 375px screenshots...');
    const mobile375Page = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await mobile375Page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await mobile375Page.waitForTimeout(800);

    const mobile375FullBuf = await mobile375Page.screenshot({ fullPage: true });
    saveScreenshot(mobile375FullBuf, 'mobile-375px-fullpage.png');

    const mobile375HeroBuf = await mobile375Page.screenshot();
    saveScreenshot(mobile375HeroBuf, 'mobile-375px-hero.png');

    await mobile375Page.close();

    // 3. Mobile 390px Context (iPhone 14 / modern device)
    console.log('Capturing Mobile 390px screenshots...');
    const mobile390Page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobile390Page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await mobile390Page.waitForTimeout(800);

    const mobile390FullBuf = await mobile390Page.screenshot({ fullPage: true });
    saveScreenshot(mobile390FullBuf, 'mobile-390px-fullpage.png');

    const mobile390HeroBuf = await mobile390Page.screenshot();
    saveScreenshot(mobile390HeroBuf, 'mobile-390px-hero.png');

    await mobile390Page.close();

    console.log('All screenshots captured successfully!');
  } finally {
    await browser.close();
    previewProcess.kill();
  }
}

run().catch((err) => {
  console.error('Failed to capture screenshots:', err);
  process.exit(1);
});
