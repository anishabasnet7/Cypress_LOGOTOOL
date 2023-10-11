class SelectPrinting {
  clickSelectPrinting() {
    return cy
      .xpath(
        "//div[contains(@class, 'footer-actions')]/button[text() = 'Select printing']"
      )
      .click();
  }

  selectRandomMethod() {
    cy.get(".method-header").then(($methodHeaders) => {
      if ($methodHeaders.length > 0) {
        const randomIndex = Cypress._.random(0, $methodHeaders.length - 1);
        const selectedMethodText = $methodHeaders.eq(randomIndex).text();
        cy.log(`Selected Method: ${selectedMethodText}`);
        $methodHeaders.eq(randomIndex).click();
      } else {
        cy.log("No method headers found.");
      }
    });
  }
}
module.exports = SelectPrinting;
