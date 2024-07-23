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
        const eyeIconsXPath =
          "//div[@class='le-wrap-color-field-wrapper ']/div[2]";
        cy.xpath(eyeIconsXPath).then((eyeIcons) => {
          const maxAttempts = eyeIcons.length;
          cy.log(`Total eye icons: ${maxAttempts}`);

          for (let i = 0; i < maxAttempts; i++) {
            cy.xpath(eyeIconsXPath).eq(i).click();
            cy.wait(5000);
            cy.log(`Clicked eye icon ${i + 1} of ${maxAttempts}`);
            cy.xpath(
              "//button[contains(@class, 'button-primary') and contains(@title, '') and text()='Continue with ordering']"
            ).then((button) => {
              const isButtonDisabled = button.hasClass("disable");
              cy.log(`Is button disabled? ${isButtonDisabled}`);
              if (!isButtonDisabled) {
                this.clickContinueButton();
                return false;
              }
            });
          }
        });
        this.clickContinueButton();
      } else {
        // If the button is enabled, directly click it
        this.clickContinueButton();
      }
    });
  }
}

module.exports = Continue;
