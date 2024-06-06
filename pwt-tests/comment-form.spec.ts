import { test, expect } from '@playwright/test';

test.describe('Работоспособность формы отправки комментария ', () => {
  test('Неавторизованный пользователь', async ({ page }) => {
    // переходим на главную
    await page.goto('http://localhost:5173');

    // ожидаем загрузки
    await page.waitForSelector('.cities__card');

    // заходим на первый оффер
    await page.locator('.cities__card').first().locator('.place-card__name').click();
    await page.waitForSelector('.page__main--offer');

    // форма коментария не видна
    const isCommentFormExist = await page.locator('.reviews__form').isVisible();
    expect(isCommentFormExist).toBeFalsy();
  });

  test('Авторизованный пользователь', async ({ page }) => {

    // Залогинимся
    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'example@mail.com');
    await page.fill('input[name="password"]', 'password12345678');

    await Promise.all([
      page.waitForURL('http://localhost:5173'),
      page.click('button[type="submit"]'),
    ]);

    // Ждём загрузки
    await page.waitForSelector('.cities__card');

    // заходим на первый оффер
    await page.locator('.cities__card').first().locator('.place-card__name').click();
    await page.locator('.cities__card').first().locator('.place-card__name').click();
    await page.waitForSelector('.page__main--offer');

    // форма коментария видна
    const isCommentFormExist = await page.locator('.reviews__form').isVisible();
    expect(isCommentFormExist).toBeTruthy();

    // заполняем форму
    const sumbittedText = 'Проверка50 Проверка50 Проверка50 Проверка50 Проверка50 Проверка50 Проверка50 Проверка50 Проверка50 Проверка50';
    await page.fill('textarea[name="review"]', sumbittedText);
    await page.getByTitle('terribly').click();

    await Promise.all([
      page.waitForResponse(
        (resp) => resp.url().includes('/comments') && resp.status() === 201
      ),
      page.click('button[type="submit"]'),
    ]);

    // проверяем новый комментарий
    const newReviewText = await page.locator('.reviews__text').first().textContent();
    const newReviewUser = await page.locator('.reviews__user-name').first().textContent();
    const newReviewRating = await page.locator('.reviews__stars>span').first().getAttribute('style');

    expect(newReviewText).toBe(sumbittedText);
    expect(newReviewUser).toBe('example');
    expect(newReviewRating).toBe('width: 20px;');
  });
});
