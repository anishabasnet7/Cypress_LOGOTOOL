const MoodScene = require("./MoodScene");

class ThreeD {
  checkAndClickThreeD(clickContinueButton) {
    const threeDXPath = "//div[@class='application-tab  modal-preview']/div[2]";
    cy.document().then((doc) => {
      const threeDButton = doc.evaluate(threeDXPath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (threeDButton) {
        cy.log("3D button found. Clicking it.");
        cy.xpath(threeDXPath).click();
        cy.wait(15000);
        MoodScene.clickMoodSceneButton(clickContinueButton);
      } 
      else {
        cy.log("3D button not found. Proceeding to Mood Scene.");
        MoodScene.clickMoodSceneButton(clickContinueButton);
       }
    });
  }
}

module.exports = new ThreeD();