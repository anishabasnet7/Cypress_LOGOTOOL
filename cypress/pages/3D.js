class ThreeD {
    click3DButton() {
      const threeDXPath = "//div[@class='application-tab  modal-preview']/div[2]";
      
      cy.xpath(threeDXPath).then((threeDButton) => {
        if (threeDButton.length > 0) {
          cy.xpath(threeDXPath)
            .click()
            .then(() => {
              cy.log("3D button clicked");
            });
        }
      });
    }
  }
  
  module.exports = ThreeD;  