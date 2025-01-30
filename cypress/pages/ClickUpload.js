class ClickUpload {
  clickUploadButton() {
    cy.wait(1000 * 20);
    cy.xpath(
      "//button[contains(@data-bind, 'Upload Logo') and text()='Upload logo']"
    ).click({ force: true });
  }
}
class SelectLogo {
  clickLogoUploadButton() {
    cy.xpath(
      "//div[@class='logo-content scroller show']/div[1]/div[1]/div[2]/button/span"
    ).click({ force: true, multiple: true });
  }
}
// class SelectLogo {
// async clickLogoUploadButton() {
//   const timeout = 1000 *30; // Set the maximum time limit in milliseconds
//   const startTime = new Date().getTime();
//   while (true) {
//     try {
//       cy.xpath(
//         "//div[@class='upload-button']//button[@class='button-secondary']/span[text()='Upload']"
//       ).click({ force: true, multiple: true });
//       break;
//     } catch (error) {
//       const currentTime = new Date().getTime();
//       if (currentTime - startTime >= timeout) {
//         // If the maximum time limit is reached and the click still fails, throw an error
//         throw new Error(
//           `Timeout (${timeout}ms) reached. SelectLogo button not successful.`
//         );
//       }
//     }
//   }
// }
// }


module.exports = {
  ClickUpload,
  SelectLogo,
};

