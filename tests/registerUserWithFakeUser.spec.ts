import { test } from "@playwright/test";
import { FakeUser } from "../utilities/dataGenerator";

const fakeUser = new FakeUser();
const userName = fakeUser.username;
const password = fakeUser.password;

test("Validating user register", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/register");
  const heading = page.getByRole("heading", {
    name: "Test Register page for Automation Testing Practice",
    exact: true,
  });
  await heading.isVisible();

  const userNameField = page.locator(`input[id='username']`);
  const passwordField = page.locator(`input[id='password']`);
  const confirmPasswordField = page.locator(`input[id='confirmPassword']`);
  const submitButton = page.locator(`button[type='submit']`);

  await userNameField.fill(userName);
  await passwordField.fill(password);
  await confirmPasswordField.fill(password);
});
