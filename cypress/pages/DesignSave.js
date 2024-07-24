class DesignSave {
    continueDesign() {
      cy.wait(15000);
      // Use cy.get() to get the body and then search for the element within it
      cy.get('body').then($body => {
        if ($body.find('div.footer button.button-secondary span:contains("Continue")').length > 0) {
          cy.xpath('//div[@class="footer"]//button[@class="button-secondary"]//span[text()="Continue"]').then($element => {
            if ($element.is(':visible')) {
              cy.wrap($element).click();
              cy.log('Continue button clicked. Non digital methods.');
              //Embroidery Methods taking longer time
              //cy.wait(15000); 
            } else {
              cy.log('Not continued for non-digital methods');
            }
          });
        } else {
          // Element does not exist
          cy.log('Continue button not available. Digital Methods');
          cy.wait(15000);
        }
      });
    }
  }
  
  module.exports = DesignSave;
