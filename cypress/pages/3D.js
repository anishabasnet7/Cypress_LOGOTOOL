const MoodScene = require("./MoodScene");

class ThreeD {
  checkAndClickThreeD(clickContinueButton) {
    const threeDXPath = "//div[@class='application-tab  modal-preview']/div[2]";
    
    cy.document().then((doc) => {
      const threeDButton = doc.evaluate(
        threeDXPath,
        doc,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      if (threeDButton) {
        cy.log("3D button found. Clicking it.");
        cy.xpath(threeDXPath).click();
        cy.wait(1000*5); 
        cy.log("Opening background options...");
        cy.xpath("//img[@class='arrow-btn-right']").click();
        cy.wait(1000);
        cy.log("Clicking on the portrait format...");
        cy.xpath("//div[contains(@class, 'format-container') and @title='Portrait']").click();
        cy.log("Portrait format selected.");
        cy.xpath("(//div[@class='static-images wrap']/div[@class='static-image '])[1]").click();
        cy.log("First Background selected.");
        cy.xpath("//div[@class='share-tab']/button[1]")
        .should('be.visible', { timeout: 1000 * 60})
        .click();   
        cy.log("Share and Download button opened.");   
        cy.xpath("(//div[@class='download-section'])[1]//div[contains(@class, 'button-secondary')]")
        .should('be.visible', { timeout: 1000 * 60})
        .click();
        cy.log("3D Image downloaded."); 
        cy.xpath("//div[@class='loading-overlay']/div", { timeout: 1000 * 15}).should('not.exist');
        cy.xpath("(//div[@class='download-section'])[2]//div[contains(@class, 'button-secondary')]")
        .should('be.visible', { timeout: 1000 * 60})
        .click();
        cy.log("Animated video downloaded."); 
        cy.xpath("//div[@class='loading-overlay']/div", { timeout: 1000 * 15}).should('not.exist');
        cy.xpath("//div[@class='logotool-share-link-container']/div[1]")
        .should('be.visible', { timeout: 1000 * 60})
        .click();
        cy.log("Share and Download button closed."); 
        MoodScene.clickMoodSceneButton(clickContinueButton);
      } else {
        cy.log("3D button not found. Proceeding to Mood Scene.");
        MoodScene.clickMoodSceneButton(clickContinueButton);
      }
    });
  }
}

module.exports = new ThreeD();
