import { test, expect } from '@playwright/test';

test('Работоспособность перехода по карточкам', async ({ page }) => {
  // переход на главную страницу
  await page.goto('http://localhost:5173');

  // ожидаем загрузки
  await page.waitForSelector('.cities__card');
  const cardElement = page.locator('.cities__card').first();

  // запоминаем id карты
  const aElement = cardElement.locator('a').first();
  const href = await aElement.getAttribute('href');
  const cardId = href ? href.split('/').pop() : '';

  // имя карты
  const cardNameElement = cardElement.locator('.place-card__name a').first();
  const cardName = await cardNameElement.evaluate((el) => el.textContent?.trim());

  // цена карты
  const cardPriceElement = cardElement.locator('.place-card__price-value').first();
  const cardPrice = await cardPriceElement.evaluate((el) => el.textContent?.trim());

  // переходим по карте
  await cardElement.locator('.place-card__name').click();

  // ждём загрузки оффера
  page.waitForURL(`http://localhost:5173/offer/${ cardId}`);

  // проверяем совпадения имени и цены
  const offerNameElement = page.locator('.offer__name').first();
  const offerName = await offerNameElement.evaluate((el) => el.textContent?.trim());

  const offerPriceElement = page.locator('.offer__price-value').first();
  const offerPrice = await offerPriceElement.evaluate((el) => el.textContent?.trim());

  expect(offerName).toBe(cardName);
  expect(offerPrice).toBe(cardPrice);
});
