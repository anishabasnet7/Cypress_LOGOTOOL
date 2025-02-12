import "cypress-file-upload";
import 'cypress-if';
import {credentials} from'./credentials'

require("cypress-xpath");

Cypress.Commands.add("login", () => {
    cy.visit(credentials.urls.heroesShirt);
    cy.wait(1000*5);
    cy.xpath(
      "//li[contains(@class, 'account-signin') and contains(@class, 'pf-dropdown-menu')]").click();
    cy.get("#email", { timeout: 10000 }).type(credentials.username);
    cy.get("#pass").type(credentials.password);
    cy.get("#send2").click();
});

Cypress.Commands.add("selectPosition", () => {
  cy.xpath("//div[@class='option-header']//span[@class='label']").each(
    ($selector, index) => {
      cy.log(`Position ${index + 1}: ${$selector.text()}`);
    }
  );
  cy.xpath(
    "count(//div[@class='option-header']//span[contains(@class, 'selector selected')])"
  ).then((count) => {
    if (count) {
      cy.log(`1st method is selected`);
    } else {
      cy.xpath(
        "(//div[@class='option-header']//span[contains(@class, 'selector')])[2]"
      ).click();
    }
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

Cypress.on("uncaught:exception", (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});

