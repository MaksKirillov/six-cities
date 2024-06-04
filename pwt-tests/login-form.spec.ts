import { test, expect } from '@playwright/test';

test.describe('Работоспособность формы логина', () => {
  test('Успешная авторизация', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'example1@mail.com');
    await page.fill('input[name="password"]', 'password12345678');

    await Promise.all([
      page.waitForURL('http://localhost:5173'),
      page.click('button[type="submit"]'),
    ]);

    expect(page.url()).toBe('http://localhost:5173/');
    expect(page.locator('.header__signout')).toContainText('Sign out');
  });

  test('Ошибка авторизации (невалидный логин)', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'example1.com');
    await page.fill('input[name="password"]', 'password12345678');

    await page.click('button[type="submit"]');
    expect(page.url()).toBe('http://localhost:5173/login');
  });

  test('Ошибка авторизации (нет пароля)', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'example1@mail.com');
    await page.fill('input[name="password"]', '');

    await page.click('button[type="submit"]');
    expect(page.url()).toBe('http://localhost:5173/login');
  });
});
