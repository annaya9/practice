# Playwright End-to-End Tests

This project contains automated end-to-end (E2E) tests written using [Playwright](https://playwright.dev/). The tests verify core functionality of the web application: login, product detail view, and adding a product to the cart.

## 📁 Test Structure

The test file includes three main scenarios:

### 1. **Login page loads correctly**
- Verifies that the login page loads properly.
- Fills in email and password (using environment variables).
- Clicks the login button.
- Checks that the account page is loaded after login and contains expected elements.

### 2. **User can view Combination Pliers product details**
- Opens the home page.
- Locates the product "Combination Pliers".
- Verifies product details (name, price, and "add to cart" button) are visible.

### 3. **User can add product to cart**
- Opens the home page.
- Selects the product "Slip Joint Pliers".
- Clicks the "Add to Cart" button.
- Verifies the toast notification confirms the product was added.
- Ensures the cart displays the correct item and redirects to the checkout page.

## ⚙️ Setup

1. Install dependencies:

```bash
npm install
```

## 2. Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in headed mode (to see the browser):
```bash
npx playwright test --headed
```

Run a specific test by name:
```bash
npx playwright test -g "test name"
```

## Additional Commands

Generate a test report:
```bash
npx playwright show-report
```

Record tests interactively:
```bash
npx playwright codegen http://localhost:3000
```

## Requirements

Node.js 16 or higher

Playwright installed

Test user accounts set up with valid credentials and access permissions