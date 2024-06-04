import { test, expect } from '@playwright/test';

test('Работоспособность фильтрации с городами', async ({ page }) => {
  // переходим на главную
  await page.goto('http://localhost:5173');

  // ожидаем загрузки
  await page.waitForSelector('.cities__card');

  await page.locator('.locations__item-link').first().waitFor();

  // перебираем города
  for (const city of await page.locator('.locations__item-link').all()) {
    await city.click();
    const currentCity = await city.textContent();

    await page.waitForSelector('.cities__card', {
      state: 'attached',
      timeout: 5000,
    });

    // проверяем, что город изменился
    const placesFoundText = await page.locator('.places__found').textContent();
    const lastWord = placesFoundText?.split(' ').pop();
    expect(currentCity).toBe(lastWord);
  }
});
