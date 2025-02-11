const MoodScene = require("./MoodScene");

class ThreeD {
  checkAndClickThreeD(clickContinueButton) {
    const threeDXPath = "//div[@class='application-tab  modal-preview']/div[2]";

    cy.xpath(threeDXPath).then((threeDButton) => {
      if (threeDButton.length > 0) {
        cy.log("3D button found. Clicking it.");
        cy.xpath(threeDXPath)
          .click()
          .then(() => {
            cy.wait(1000 * 15);
            MoodScene.clickMoodSceneButton(clickContinueButton);
          });
      } else {
        cy.log("3D button not found. Looking for Mood Scene");
        MoodScene.clickMoodSceneButton(clickContinueButton);
      }
    });
  }
}

module.exports = new ThreeD();
