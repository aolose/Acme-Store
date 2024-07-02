import { expect, test as base } from "@playwright/test";
import { App } from "./app";

const test = base.extend<{ app: App }>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await app.goto();
    await expect(app.product).toHaveCount(6);
    await use(app);
  },
});

test("Change Pagination", async ({ app }) => {
  await expect(app.paging).toHaveCount(4);
  await app.clickNthPag(2);
  await app.page.screenshot();
  await expect(app.page).toHaveURL(`${app.baseUrl}/3`);
});

test("Change URL By Search", async ({ app }) => {
  const search = "test";
  await app.searchText(search);
  await expect(app.page).toHaveURL(`${app.baseUrl}/1?s=${search}`);
});

test("Search", async ({ app }) => {
  const text = "intelligent";
  await app.searchText(text);
  await expect(app.product.first()).toBeVisible();
  await app.hoverProduct();
  await expect(app.previewCard).toBeVisible();
  await expect(app.previewCard).toHaveText(new RegExp(text, "i"));
});

test("Add to Shopping Cart", async ({ app }) => {
  await app.addItem(0, 10);
  await app.addItem(1, 1);
  await expect(app.cartTrigger).toHaveText("11");
  await app.cartTrigger.click();
  await expect(app.cart).toBeVisible();
  await expect(app.cartItem).toHaveCount(2);
  await app.increaseQuantityOfCartItem(1);
  await expect(app.cartTrigger).toHaveText("12");
  await app.reduceQuantityOfCartItem(0);
  await expect(app.cartTrigger).toHaveText("11");
  await expect(app.cartItem).toHaveCount(1);
  await app.removeCartItem();
  await expect(app.cartItem).toHaveCount(0);
});

test("Change currency", async ({ app }) => {
  await app.currencyTrigger.click();
  await expect(app.currency.first()).toBeVisible();
  const [symbol] = await app.selectCurrency(3);
  await expect(app.product.first().locator(app.price)).toHaveText(
    new RegExp(symbol),
  );
});

test("Checkout", async ({ app }) => {
  await app.addItem(1, 10);
  await app.addItem(2, 10);
  await app.cartTrigger.click();
  await app.cartCheckout();
  await expect(app.cartItem).toHaveCount(0);
});
