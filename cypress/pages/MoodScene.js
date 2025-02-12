class MoodScene {
  clickMoodSceneButton(clickContinueButton) {
    const moodSceneXPath = "//div[@class='application-tab  modal-preview']/div[3]";

      cy.document().then((doc) => {
        const moodSceneButton = doc.evaluate(moodSceneXPath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
        if (moodSceneButton) {
          cy.log("Mood Scene found. Clicking it.");
          cy.xpath(moodSceneXPath).click();
          cy.wait(15000);
          clickContinueButton();
        } 
      else {
        cy.log("Mood Scene button also not found. Clicking Continue.");
        clickContinueButton();
      }
    });
  }
}

module.exports = new MoodScene();