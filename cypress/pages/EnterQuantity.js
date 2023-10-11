class EnterQuantity {
  listQuantity() {
    return cy.xpath('(//input[contains(@class, "input-quantity")])');
  }

  isInputEnabled(inputField) {
    return Cypress.$(inputField).is(":disabled") ? "disabled" : "enabled";
  }

  enterQuantityValue(inputField, quantity) {
    cy.get(inputField).type(quantity);
    cy.log(`Entered ${quantity} into the quantity field`);
  }

  enterNumber() {
    this.listQuantity().then((inputFields) => {
      const enabledInputFields = inputFields.filter(
        (index, inputField) => !Cypress.$(inputField).is(":disabled")
      );
      if (enabledInputFields.length > 0) {
        this.enterQuantityValue(enabledInputFields.eq(0), "5");
      } else {
        cy.log(`No enabled input fields found.`);
      }
    });
  }
}
module.exports = EnterQuantity;
