// Import the "test" function from Playwright Test.
import { test } from "@playwright/test";
import { MySqlContainer } from '@testcontainers/mysql';


// Define a test case.
test('should display "Hello, TypeScript Express!" text on page', async ({ page }) => {
  // https://node.testcontainers.org/modules/mysql/
  const username = "testUser";
  const password = "testPassword";
  const database = "testDB";

  // Test non-root user
  const container = await new MySqlContainer()
    .withUsername(username)
    .withUserPassword(password)
    .withDatabase(database)
    .start();


  console.log(container.getConnectionUri(), 
  `mysql://${username}:${password}@${container.getHost()}:${container.getPort()}/${database}`, 
  "host:", container.getHost(),
    "port:", container.getPort(),
    "database:", container.getDatabase(),
    "user:", container.getUsername(),
    "password:", container.getUserPassword(),)


  // Navigate to localhost:3000/ (baseUrl from playwright.config.ts).
  await page.goto("/");
  // Wait for the text "Hello, TypeScript Express!" to appear on the page.
  await page.locator("text=Hello, TypeScript Express!").waitFor();

  await container.stop();
});
