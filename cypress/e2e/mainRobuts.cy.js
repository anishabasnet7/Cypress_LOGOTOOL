import Search from "../pages/Search";
import EnterQuantity from "../pages/EnterQuantity";
import SelectPrinting from "../pages/SelectPrinting,js";
describe("Login", () => {
  before(() => {
    // Log in before each test case
    cy.login();
  });
  it("Happy Flow", function () {
    const search = new Search();
    const enterQuantity = new EnterQuantity();
    const selectPrinting = new SelectPrinting();

    // Search item
    search.typeSearchInput().type("38029010");
    search.clickSearchButton();
    cy.wait(10000);

    // Enter Quantity
    enterQuantity.listQuantity().filter(":not(:disabled)").first().type("5");

    // Select Printing
    selectPrinting.clickSelectPrinting();

    // Select a random method
    cy.get(".method-header").then(($methodHeaders) => {
      const randomIndex = Cypress._.random(0, $methodHeaders.length - 1);
      const randomMethod = $methodHeaders.eq(randomIndex).text().trim();
      $methodHeaders.eq(randomIndex).click();
      cy.log(`Selected Method: ${randomMethod}`);
    });

    // Select a random position
    cy.get(".option-header .selector")
      .eq(Cypress._.random(0, Cypress.$(".option-header .selector").length - 1))
      .click();

    // Select a random color option
    cy.get(".dropdown-wrapper select option:not(:first-child)").then(
      ($options) => {
        const randomIndex = Cypress._.random(0, $options.length - 1);
        const randomValue = Cypress.$($options[randomIndex]).val();
        cy.get(".dropdown-wrapper select")
          .select(randomValue)
          .should("have.value", randomValue);
      }
    );
  });
});
