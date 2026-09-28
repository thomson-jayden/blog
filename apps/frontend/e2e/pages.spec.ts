import { expect, test } from '@playwright/test';

test.describe('page rendering', () => {
  test('home page renders hero and post sections', async ({ page }) => {
    const response = await page.goto('/');

    expect(response?.ok()).toBe(true);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'A blog about tech, travel and everything in between.',
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('heading', { name: 'Featured post' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Recent posts' }),
    ).toBeVisible();

    await expect(page.locator('.featured-card')).toBeVisible();
    await expect(page.locator('.grid-3 .post-card')).toHaveCount(3);
  });

  test('posts page renders the filtered, paginated list', async ({ page }) => {
    const response = await page.goto('/posts/');

    expect(response?.ok()).toBe(true);
    await expect(
      page.getByRole('heading', { level: 1, name: 'All posts' }),
    ).toBeVisible();

    await expect(page.locator('.filter')).toHaveCount(5);
    await expect(page.locator('[data-post-card][data-visible]')).toHaveCount(4);
    await expect(page.locator('#result-summary')).toHaveText(/\d+ posts?/);
    await expect(page.locator('#empty-state')).toBeHidden();
  });

  test('about page renders bio, topics and interests', async ({ page }) => {
    const response = await page.goto('/about/');

    expect(response?.ok()).toBe(true);
    await expect(
      page.getByRole('heading', { level: 1, name: "Hi, I'm Jayden." }),
    ).toBeVisible();

    await expect(page.locator('.topic')).not.toHaveCount(0);
    await expect(page.locator('.chip')).not.toHaveCount(0);
  });

  test('primary navigation links reach each page', async ({ page }) => {
    await page.goto('/');

    await page
      .getByRole('navigation', { name: 'Primary navigation' })
      .getByRole('link', { name: 'Blog' })
      .click();
    await expect(
      page.getByRole('heading', { level: 1, name: 'All posts' }),
    ).toBeVisible();

    await page
      .getByRole('navigation', { name: 'Primary navigation' })
      .getByRole('link', { name: 'About' })
      .click();
    await expect(
      page.getByRole('heading', { level: 1, name: "Hi, I'm Jayden." }),
    ).toBeVisible();
  });
});
