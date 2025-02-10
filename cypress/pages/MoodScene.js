class MoodScene {
    clickMoodSceneButton() {
      const moodSceneXPath = "//div[@class='application-tab  modal-preview']/div[3]";
  
      cy.xpath(moodSceneXPath).then((moodSceneButton) => {
        if (moodSceneButton.length > 0) {
          cy.xpath(moodSceneXPath)
            .click()
            .then(() => {
              cy.log("Mood Scene button clicked");
            });
        }
      });
    }
  }
  
  module.exports = MoodScene;
  