class Continue {
  clickContinueButton() {
    cy.xpath(
      "//button[contains(@class, 'button-primary') and not(contains(@class, 'disable')) and contains(@title, '') and text()='Continue with ordering']"
    )
      .click()
      .then(() => {
        cy.log("Button clicked");
      });
  }

  performActions() {
    cy.xpath(
      "//button[contains(@class, 'button-primary') and contains(@title, '') and text()='Continue with ordering']"
    ).then((button) => {
      const isButtonDisabled = button.hasClass("disable");
      cy.log(`Is button disabled? ${isButtonDisabled}`);

      if (isButtonDisabled) {
        // If the button is disabled, click on the eye icon to enable it and then click the button
        cy.xpath("//div[@data-class='le-color-table']/div[1]/div[2]")
          .click()
          .then(() => {
            cy.log("Eye icon clicked");
            // After enabling the button, click it
            this.clickContinueButton();
          });
      } else {
        // If the button is enabled, directly click it
        this.clickContinueButton();
      }
    });
  }
}

module.exports = Continue;
