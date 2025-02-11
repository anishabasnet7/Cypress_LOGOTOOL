## Automation of LogoTool using Cypress
This repository contains end-to-end tests for PFConcept using Cypress, implementing the Page Object Model (POM) design pattern. Before setting up the project, ensure Node.js is installed.

Navigate to the Project Directory. cd D:\Cypress_LOGOTOOL
Install Cypress. npm install cypress --save-dev

# Project Structure
The project follows the Page Object Model (POM) design pattern to enhance test maintainability and readability.
cypress/: Contains all Cypress-related files.
integration/: Stores test specifications.
main.cy.js: The main test file.
pages/: Contains page object classes.
  ClickUpload.js: Page object for opening the LogoTool application.
  BrowseLogo.js: Page object for browsing the logo.
  
# Running Tests
Interactive Mode: npx cypress open
  This will open the Cypress Test Runner, where we can select and run the test. In the package.json file, the scripts section defines custom commands. Running npm run copen is equivalent to npx cypress open.
Headless Mode: npx cypress run
  This will execute all tests in the terminal without opening the Test Runner.
