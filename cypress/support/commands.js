// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("login", () => {
  cy.fixture("credentials").then((credentials) => {
    cy.visit(credentials.adminUrl);
    cy.xpath(
      "//li[contains(@class, 'account-signin') and contains(@class, 'pf-dropdown-menu')]"
    ).click();
    cy.get("#email", { timeout: 10000 }).type(credentials.username);
    cy.get("#pass").type(credentials.password);
    cy.get("#send2").click();
  });
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
