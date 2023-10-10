require("cypress-xpath");
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

Cypress.Commands.add("numberOfColorsAllowed", () => {
  cy.xpath('//div[@class="dropdown-wrapper"]/select')
    .find("option:not(:first-child)")
    .then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      const randomOption = $options[randomIndex];
      const randomValue = Cypress.$(randomOption).val();
      cy.xpath('//div[@class="dropdown-wrapper"]/select').select(randomValue);
      cy.xpath('//div[@class="dropdown-wrapper"]/select').should(
        "have.value",
        randomValue
      );
    });
});
