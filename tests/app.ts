import type { Page, Locator } from "@playwright/test";

const APP_HOME = "http://localhost:3000";

export class App {
  public readonly baseUrl = APP_HOME;
  public readonly paging: Locator;
  private readonly search: Locator;
  public readonly previewCard: Locator;
  public readonly cart: Locator;
  public readonly cartTrigger: Locator;
  public readonly product: Locator;
  public readonly cartItem: Locator;
  public readonly currency: Locator;
  private readonly productName: Locator;
  public readonly currencyTrigger: Locator;
  public readonly price: Locator;
  private readonly add: Locator;
  private readonly sub: Locator;
  private readonly rm: Locator;
  private readonly checkout: Locator;

  constructor(public readonly page: Page) {
    this.paging = this.page.getByRole("link");
    this.add = this.page.locator("data-test=add");
    this.sub = this.page.locator("data-test=sub");
    this.rm = this.page.locator("data-test=rm");
    this.checkout = this.page.locator("data-test=checkout");
    this.search = this.page.locator("input");
    this.previewCard = this.page.locator("div.preview");
    this.cart = this.page.locator("data-test=cart");
    this.cartTrigger = this.page.locator("data-test=cart-trigger");
    this.product = this.page
      .locator("data-test=product")
      .and(this.page.locator(".in"));
    this.productName = this.page.locator("data-test=title");
    this.price = this.page.locator("data-test=price");
    this.cartItem = this.page.locator("data-test=cart-item");
    this.currency = this.page.locator("data-test=currency");
    this.currencyTrigger = this.page.locator("data-test=currency-trigger");
  }

  async goto() {
    await this.page.goto(APP_HOME);
  }

  async addItem(nth: number = 0, times: number = 1) {
    const item = this.product.nth(nth);
    while (times--) {
      await item.click();
    }
  }

  async hoverProduct(nth: number = 0) {
    const item = this.product.nth(nth);
    await item.hover();
  }

  async selectCurrency(nth: number = 0) {
    const btn = this.currency.nth(nth);
    await btn.click();
    const text = await btn.evaluate((a) => a.textContent);
    return text?.split(/(?<=^.)/) || [];
  }

  async clickNthPag(nth: number = 0) {
    const page = this.paging.nth(nth);
    await page.click();
  }

  async searchText(text: string) {
    await this.search.fill(text);
    await this.search.press("Enter");
  }

  async increaseQuantityOfCartItem(nth: number = 0) {
    await this.cartItem.nth(nth).locator(this.add).click();
  }

  async reduceQuantityOfCartItem(nth: number = 0) {
    await this.cartItem.nth(nth).locator(this.sub).click();
  }

  async removeCartItem(nth: number = 0) {
    await this.cartItem.nth(nth).locator(this.rm).click();
  }

  async cartCheckout() {
    this.page.on("dialog", (dialog) => dialog.accept());
    await this.checkout.click();
  }
}
