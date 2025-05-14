// import { chromium, expect, type FullConfig } from "@playwright/test";

// async function globalSetup(config: FullConfig) {
//   const { storageState } = config.projects[0].use;
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto(
//     "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
//   );
//   await page.fill("input[id='input-email']", "mukto@example.com");
//   await page.fill("input[id='input-password']", "thisistest");
//   await page.click("input[value='Login']");
//   await expect(
//     page.locator("div[id='content'] div:nth-child(1) h2:nth-child(1)")
//   ).toBeVisible();
//   await page.context().storageState({ path: storageState as string });
//   await browser.close();
// }

// export default globalSetup;
