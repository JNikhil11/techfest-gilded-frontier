import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const exportedScreenshotDir = path.join(rootDir, 'exported_screenshots');
const brainScreenshotDir = 'C:/Users/jnikh/.gemini/antigravity/brain/cf18ee15-b4ea-493a-8998-e704823ac6f3/screenshots';

if (!fs.existsSync(exportedScreenshotDir)) {
  fs.mkdirSync(exportedScreenshotDir, { recursive: true });
}
if (!fs.existsSync(brainScreenshotDir)) {
  fs.mkdirSync(brainScreenshotDir, { recursive: true });
}

function saveScreenshot(sourceBuffer, filename) {
  const exportPath = path.join(exportedScreenshotDir, filename);
  const brainPath = path.join(brainScreenshotDir, filename);
  fs.writeFileSync(exportPath, sourceBuffer);
  fs.writeFileSync(brainPath, sourceBuffer);
  console.log(`[EXPORTED] ${filename} -> exported_screenshots/${filename}`);
}

async function run() {
  console.log('Starting preview server on port 3000...');
  const previewProcess = spawn('npm', ['run', 'preview', '--', '--port', '3000', '--host'], {
    cwd: rootDir,
    stdio: 'pipe',
    shell: true,
  });

  await new Promise((resolve) => setTimeout(resolve, 4000));

  const browser = await chromium.launch();
  try {
    // ----------------------------------------------------
    // DESKTOP CONTEXT (1440x900)
    // ----------------------------------------------------
    console.log('\n--- Capturing Desktop Screenshots (1440px) ---');
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(1000);

    // 1. Full Desktop Homepage
    const fullDesktop = await desktopPage.screenshot({ fullPage: true });
    saveScreenshot(fullDesktop, '01-full-desktop-homepage.png');

    // 2. Hero Section
    const heroEl = desktopPage.locator('#top');
    const heroBuf = await heroEl.screenshot();
    saveScreenshot(heroBuf, '02-hero-section.png');

    // Hide fixed header for individual section screenshots to prevent overlay obstruction
    await desktopPage.evaluate(() => {
      const header = document.querySelector('header');
      if (header) header.style.display = 'none';
    });

    // 3. About Techfest
    const aboutEl = desktopPage.locator('#about');
    await aboutEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const aboutBuf = await aboutEl.screenshot();
    saveScreenshot(aboutBuf, '03-about-techfest.png');

    // 4. Competition Showcase
    const compEl = desktopPage.locator('#competitions');
    await compEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const compBuf = await compEl.screenshot();
    saveScreenshot(compBuf, '04-competition-showcase.png');

    // 5. Workshop Catalogue
    const wsEl = desktopPage.locator('#workshops');
    await wsEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const wsBuf = await wsEl.screenshot();
    saveScreenshot(wsBuf, '05-workshop-catalogue.png');

    // 6. International Summit
    const summitEl = desktopPage.locator('#summit');
    await summitEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const summitBuf = await summitEl.screenshot();
    saveScreenshot(summitBuf, '06-international-summit.png');

    // 7. Robowars and Exhibitions
    const roboEl = desktopPage.locator('#experiences');
    await roboEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const roboBuf = await roboEl.screenshot();
    saveScreenshot(roboBuf, '07-robowars-and-exhibitions.png');

    // 8. Accommodation and Countdown
    const venueEl = desktopPage.locator('#venue');
    await venueEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const venueBuf = await venueEl.screenshot();
    saveScreenshot(venueBuf, '08-accommodation-and-countdown.png');

    // 9. Final CTA and Footer
    const finalCtaFooterEl = desktopPage.locator('#final-cta-and-footer');
    await finalCtaFooterEl.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(400);
    const finalCtaFooterBuf = await finalCtaFooterEl.screenshot();
    saveScreenshot(finalCtaFooterBuf, '09-final-cta-and-footer.png');

    await desktopPage.close();

    // ----------------------------------------------------
    // MOBILE CONTEXT (375x812)
    // ----------------------------------------------------
    console.log('\n--- Capturing Mobile Screenshots (375px) ---');
    const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(1000);

    // 10. Full Mobile Homepage
    const mobileFull = await mobilePage.screenshot({ fullPage: true });
    saveScreenshot(mobileFull, '10-full-mobile-homepage.png');

    // Hide fixed header for individual section captures
    await mobilePage.evaluate(() => {
      const header = document.querySelector('header');
      if (header) header.style.display = 'none';
    });

    // 11. Mobile Competition Section
    const mobileCompEl = mobilePage.locator('#competitions');
    await mobileCompEl.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    const mobileCompBuf = await mobileCompEl.screenshot();
    saveScreenshot(mobileCompBuf, '11-mobile-competitions.png');

    // 12. Mobile Workshop Section
    const mobileWsEl = mobilePage.locator('#workshops');
    await mobileWsEl.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(400);
    const mobileWsBuf = await mobileWsEl.screenshot();
    saveScreenshot(mobileWsBuf, '12-mobile-workshops.png');

    await mobilePage.close();

    console.log('\nAll 12 visual output screenshots successfully exported to ./exported_screenshots/');
  } finally {
    await browser.close();
    previewProcess.kill();
  }
}

run().catch((err) => {
  console.error('Failed to export screenshots:', err);
  process.exit(1);
});

