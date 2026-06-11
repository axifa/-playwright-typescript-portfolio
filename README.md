# Playwright TypeScript Test Automation Framework

## About
A test automation framework built with Playwright and TypeScript. Covers UI testing and API testing with a clean Page Object Model structure.

## Tools Used
- Playwright
- TypeScript
- Node.js

## What is Tested
- UI Tests: Todo app - add todo, complete todo, page title, visibility
- API Tests: JSONPlaceholder REST API - status codes and response data

## How To Run Tests

Install dependencies:
npm install

Run all tests:
npx playwright test

Run UI tests only:
npx playwright test todo.spec.ts

Run API tests only:
npx playwright test api.spec.ts

## Project Structure
- tests/ - all test files
- pages/ - Page Object Model files