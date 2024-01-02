class Continue {
  clickContinueButton() {
    cy.xpath(
      "//button[contains(@class, 'button-primary') and contains(@title, '') and text()='Continue with ordering']"
    ).click();
  }
}

module.exports = Continue;
