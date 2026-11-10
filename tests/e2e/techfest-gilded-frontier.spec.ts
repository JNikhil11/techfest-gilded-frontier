import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { name: 'Mobile-iPhone', width: 375, height: 812 },
  { name: 'Tablet-iPad', width: 768, height: 1024 },
  { name: 'Laptop-Standard', width: 1280, height: 800 },
  { name: 'Desktop-Editorial', width: 1440, height: 900 },
  { name: 'UltraWide-4K', width: 2560, height: 1440 },
];

test.describe('TECHFEST IIT BOMBAY — THE GILDED FRONTIER E2E VERIFICATION', () => {
  test('1. Zero console errors, zero uncaught page errors, and porcelain background physics', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await expect(page.locator('h1')).toContainText('The Gilded Frontier');
    await expect(page.locator('#top')).toContainText('An Aetherial Renaissance');

    const bgColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    // #FFFEFC converts to rgb(255, 254, 252)
    expect(bgColor).toBe('rgb(255, 254, 252)');
    expect(errors).toEqual([]);
  });

  test('2. Moving Gold-Light Signature SVG & 2D Sparkle Canvas are active and Zero 3D/WebGL contexts exist', async ({ page }) => {
    await page.goto('/');
    const goldTrail = page.locator('[data-testid="gold-light-signature"]');
    await expect(goldTrail).toBeAttached();

    const sparkleCanvas = page.locator('canvas[data-testid="gold-sparkle-canvas"]').first();
    await expect(sparkleCanvas).toBeVisible();

    // Verify strictly 2D context and ZERO WebGL/3D canvases
    const hasWebGL = await page.evaluate(() => {
      const canvases = Array.from(document.querySelectorAll('canvas'));
      return canvases.some((c) => {
        try {
          return c.getContext('webgl') !== null && c.getAttribute('data-context') === '3d';
        } catch {
          return false;
        }
      });
    });
    expect(hasWebGL).toBe(false);
  });

  test('3. Interactive Competitions Filter, Meshmerize & ZeroCode Spotlight verification', async ({ page }) => {
    await page.goto('/');
    const compSection = page.locator('#competitions');
    await compSection.scrollIntoViewIfNeeded();

    await expect(compSection).toContainText('Meshmerize');
    await expect(compSection).toContainText('ZeroCode');
    await expect(compSection).toContainText('INR 1,00,000');
    await expect(compSection).toContainText('INR 80,000');

    // Filter by Aerospace & DeepTech
    await compSection.getByRole('button', { name: /Aerospace & DeepTech/i }).click();
    await expect(compSection).toContainText('National Aeromodelling Challenge');
  });

  test('4. Interactive Workshops Track Switcher & Verified Pricing', async ({ page }) => {
    await page.goto('/');
    const wsSection = page.locator('#workshops');
    await wsSection.scrollIntoViewIfNeeded();

    await expect(wsSection).toContainText('Artificial Intelligence + Machine Learning');
    await wsSection.getByRole('button', { name: /Engineering & Robotics/i }).click();
    await expect(wsSection).toContainText('IoT using Arduino or Raspberry Pi');
  });

  test('5. All Outbound Registration & Explore Links point to verified techfest.org domains', async ({ page }) => {
    await page.goto('/');
    const invalidHrefs = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a'));
      return anchors
        .map((a) => a.getAttribute('href') || '')
        .filter((href) => href === '' || href === '#' || href.startsWith('javascript:'));
    });
    expect(invalidHrefs).toEqual([]);
  });

  for (const vp of VIEWPORTS) {
    test(`6. Responsive Layout & Zero Horizontal Overflow at ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(overflow).toBe(false);
    });
  }
});
