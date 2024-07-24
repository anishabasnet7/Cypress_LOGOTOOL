class AddCart {
    clickAddCart(){
      cy.xpath('//table//tr[1]//td//button[contains(@class, "action secondary large")]//span[text()="Add to cart"]').click();
      cy.log('Add to cart button clicked');
  }
}
module.exports = AddCart;
