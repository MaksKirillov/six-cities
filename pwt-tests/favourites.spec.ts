import { test, expect } from '@playwright/test';

test.describe('Работоспособность странички и кнопок добавления в «Избранное»', () => {
  test('Неавторизованный пользователь', async ({ page }) => {
    // зайдём на главную
    await page.goto('http://localhost:5173');

    // ожидаем загрузки
    await page.waitForSelector('.cities__card');

    // т.к. неавторизованы, то на логин
    await page.locator('.place-card__bookmark-button').first().click();
    await page.waitForURL('http://localhost:5173/login');

    // попытаемся зайти в favourites без логина
    await page.goto('http://localhost:5173/favourites');
    await page.waitForURL('http://localhost:5173/login');
  });

  test('Авторизованный пользователь', async ({ page }) => {

    // Залогинимся
    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'example3@mail.com');
    await page.fill('input[name="password"]', 'password12345678');

    await Promise.all([
      page.waitForURL('http://localhost:5173'),
      page.click('button[type="submit"]'),
    ]);

    // Ждём загрузки
    await page.waitForSelector('.cities__card');

    // Изначальные параметры
    const initialFavCounter = await page.locator('.header__favorite-count').textContent();

    // добавим в избранное
    await page.locator('.place-card__bookmark-button').first().click();
    await page.waitForSelector('.place-card__bookmark-button--active');
    const changedFavCounter = await page.locator('.header__favorite-count').textContent();

    expect(parseInt(changedFavCounter || '0', 10)).toEqual(parseInt(initialFavCounter || '0', 10) + 1);

    // попытаемся зайти в favourites
    await page.goto('http://localhost:5173/favourites');
    await page.waitForURL('http://localhost:5173/favourites');
  });
});
