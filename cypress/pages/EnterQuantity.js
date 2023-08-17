class EnterQuantity {
  listQuantity() {
    return cy.xpath('(//input[contains(@class, "input-quantity")])');
  }
}
module.exports = EnterQuantity;
