class MoodScene {
  clickMoodSceneButton(clickContinueButton) {
    const moodSceneXPath = "//div[@class='application-tab  modal-preview']/div[3]";

    cy.xpath(moodSceneXPath).then((moodSceneButton) => {
      if (moodSceneButton.length > 0) {
        cy.xpath(moodSceneXPath)
          .click()
          .then(() => {
            cy.log("Mood Scene button clicked");
            cy.wait(1000 * 15);
            clickContinueButton(); 
          });
      } else {
        cy.log("Mood Scene button also not found. Clicking Continue.");
        clickContinueButton();
      }
    });
  }
}

module.exports = new MoodScene();
