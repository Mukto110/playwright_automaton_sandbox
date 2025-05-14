import { test } from "@playwright/test";
import { LoginHelper } from "../utilities/authHelper";

test("User can login successfully", async ({ page }) => {
  const loginHelper = new LoginHelper(page);

  await loginHelper.navigateToLoginPage();
  await loginHelper.login("student", "Password123");
});
