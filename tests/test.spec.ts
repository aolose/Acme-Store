import {test, expect} from '@playwright/test';

const APP_HOME = 'http://localhost:3000';

test('has title', async ({page}) => {
    await page.goto(APP_HOME);
    await expect(page).toHaveTitle(/ACME STORE/);
});

test('Change Pagination', async ({page}) => {
    await page.goto(APP_HOME);
    const links = page.getByRole('link')
    const nextPage = links.filter({hasText: '2'})
    await nextPage.click()
    await expect(page).toHaveURL(`${APP_HOME}/2`);
});


test('Change URL By Search', async ({page}) => {
    await page.goto(APP_HOME);
    const input = await page.$('input')
    await input?.click()
    const search = 'test111'
    await page.keyboard.type(search)
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(`${APP_HOME}/1?s=${search}`);
});

test('Search', async ({page}) => {
    await page.goto(APP_HOME);
    const text = 'intelligent'
    await page.getByRole('search').fill(text)
    await page.keyboard.press('Enter')
    await page.isVisible('.in')
    await page.hover('.in')
    const preview = page.getByRole('contentinfo')
    await expect(preview).toBeVisible()
    await expect(preview).toContainText(new RegExp(text, 'i'))
})

test('Add to Shopping Cart', async ({page}) => {
    await page.goto(APP_HOME);
    await page.isVisible('.in')

    const items = page.getByRole('listitem')
    const item = items.first()

    await expect(item).toBeVisible()

    await item.click()
    await item.click()

    const cartBtn = page.locator('//button[@name="shoppingCartBtn"]')
    await expect(cartBtn).toBeVisible()

    await expect(cartBtn).toContainText(/2/)
    await cartBtn?.click()

    const cart = page.getByRole('list')
    await expect(cart).toBeVisible()
    const optBtn = page.locator('//div[contains(@class,"opt")]/button')

    const delItem = optBtn.first()
    const addItem =optBtn.last()
    const quantity =  page.locator('//div[contains(@class,"opt")]/span').last()

    await expect(quantity).toContainText('2')
    await delItem.click()
    await expect(quantity).toContainText('1')
    await addItem.click()
    await expect(quantity).toContainText('2')
})

test('Change currency', async ({page}) => {
    await page.goto(APP_HOME);
    await page.isVisible('.in')
    const items = page.getByRole('listitem')
    const item = items.first()

    await expect(item).toContainText(/\$\d+/)

    const currencyChangeButton = await page.$('[name="cur"].cur')
    await currencyChangeButton?.focus()
    const jpyBtn = page.getByRole('button', {name: 'jpy'})
    await expect(jpyBtn).toBeVisible()
    await jpyBtn?.click()
    await expect(item).toContainText(/¥\w+/)
})

test('Checkout', async ({page}) => {
    await page.goto(APP_HOME);
    await page.isVisible('.in')

    const cartBtn = await page.$('[name=shopping-cart-btn]')
    const items =page.locator('css=.in')
    const item = items.first()

    await expect(item).toBeVisible()
    expect(cartBtn).toBeTruthy()

    await item.click()
    await cartBtn?.click()

    const cardItems =  page.locator('css=.cart-item')
    await expect(cardItems).toBeVisible()

    page.on('dialog', dialog => dialog.accept());

    const checkOut = page.getByRole('button', {name: 'checkout'})

    await expect(checkOut).toBeVisible()

    await checkOut.click()
    await expect(cardItems).toBeHidden()
})