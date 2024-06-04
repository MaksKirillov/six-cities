import { test, expect } from '@playwright/test';

test('Загрузка данных карточек с сервера', async ({ page }) => {
  // переходим на главную
  await page.goto('http://localhost:5173');

  // ожидаем загрузки
  await page.waitForSelector('.cities__card');

  await page.locator('.cities__card').first().waitFor();

  // проверяем, что карты загрузились
  const cardElements = await page.locator('.cities__card').all();
  expect(cardElements.length).toBeGreaterThan(0);
});
