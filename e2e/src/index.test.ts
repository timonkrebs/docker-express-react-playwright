// Import the "test" function from Playwright Test.
import { test } from "@playwright/test";

// Define a test case.
test('should display "Hello, TypeScript Express!" text on page', async ({ page }) => {
  // Navigate to localhost:3000/ (baseUrl from playwright.config.ts).
  await page.goto("/");
  // Wait for the text "Hello, TypeScript Express!" to appear on the page.
  await page.locator("text=Hello, TypeScript Express!").waitFor();
});
