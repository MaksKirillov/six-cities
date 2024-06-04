import { test, expect } from '@playwright/test';

test('Работоспособность сортировки по ценам', async ({ page }) => {
  // переходим на главную
  await page.goto('http://localhost:5173');

  // ожидаем загрузки
  await page.waitForSelector('.cities__card');

  // запоминаем цены до сортировки
  const pricesBeforeSorting = await page
    .locator('place-card__price-value')
    .allTextContents();

  // сортируем low to high
  await page.click('.places__sorting-type');
  await page.click('text="Price: low to high"');

  // ждём сортировки
  await page.waitForSelector('.cities__card', {
    state: 'attached',
    timeout: 5000,
  });

  // запоминаем цены после сортировки
  const pricesAfterSortingUp = (
    await page.locator('.place-card__price-value').allTextContents()
  ).map((price) => parseInt(price.replace('€', '').trim(), 10));

  // проверяем
  for (let i = 0; i < pricesAfterSortingUp.length - 1; i++) {
    expect(pricesAfterSortingUp[i + 1]).toBeGreaterThanOrEqual(
      pricesAfterSortingUp[i]
    );
  }

  // сортируем high to low
  await page.click('.places__sorting-type');
  await page.click('text="Price: high to low"');

  await page.waitForSelector('.cities__card', {
    state: 'attached',
    timeout: 5000,
  });

  const pricesAfterSortingDown = (
    await page.locator('.place-card__price-value').allTextContents()
  ).map((price) => parseInt(price.replace('€', '').trim(), 10));

  for (let i = 0; i < pricesAfterSortingDown.length - 1; i++) {
    expect(pricesAfterSortingDown[i + 1]).toBeLessThanOrEqual(
      pricesAfterSortingDown[i]
    );
  }

  // убираем сортировку по ценам
  await page.click('.places__sorting-type');
  await page.click('text="Popular"');

  await page.waitForSelector('.cities__card', {
    state: 'attached',
    timeout: 5000,
  });

  const pricesAfterSorting = await page
    .locator('place-card__price-value')
    .allTextContents();

  for (let i = 0; i < pricesAfterSorting.length; i++) {
    pricesAfterSorting[i] = pricesBeforeSorting[i];
  }
});
