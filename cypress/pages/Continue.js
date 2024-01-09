class Continue {
  clickContinueButton() {
    cy.xpath(
      "//button[contains(@class, 'button-primary') and contains(@title, '') and text()='Continue with ordering']"
    ).click({ force: true });
  }
}

module.exports = Continue;
