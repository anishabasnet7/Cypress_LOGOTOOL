class MoodScene {
  clickMoodSceneButton(clickContinueButton) {
    const moodSceneXPath = "//div[@class='application-tab  modal-preview']/div[3]";

      cy.document().then((doc) => {
        const moodSceneButton = doc.evaluate(moodSceneXPath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
        if (moodSceneButton) {
          cy.log("Mood Scene found. Clicking it.");
          cy.xpath(moodSceneXPath).click();
          cy.wait(1000 * 5);
          cy.xpath("//div[@class='mood-thumbnail '][1]").click();
          cy.wait(1000);
          cy.xpath("//div[@class='loading-overlay']/div", { timeout: 1000 * 15}).should('not.exist');
          cy.xpath("//div[@class='mood-left-sidebar']/button").click();
          cy.wait(1000);
          cy.xpath("//div[@class='loading-overlay']/div", { timeout: 1000 * 15}).should('not.exist');
          //cy.wait(1000*15);
          clickContinueButton();
        } 
      else {
        cy.log("Clicking Continue.");
        clickContinueButton();
      }
    });
  }
}

module.exports = new MoodScene();