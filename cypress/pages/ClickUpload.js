class ClickUpload {
  clickUploadButton() {
    cy.wait(20000);
    cy.xpath(
      "//button[contains(@data-bind, 'Upload Logo') and text()='Upload logo']"
    ).click({ force: true });
  }
}
class SelectLogo {
  clickLogoUploadButton() {
    cy.xpath(
      "//div[@class='upload-button']//button[@class='button-secondary']/span[text()='Upload']"
    ).click({ force: true, multiple: true });
  }
}
// class SelectLogo {
// async clickLogoUploadButton() {
//   const timeout = 30000; // Set the maximum time limit in milliseconds
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
class BrowseLogo {
  uploadLogo() {
    const fileName = "../Cypress_LOGOTOOL/cypress/fixtures/NBC.pdf";
    cy.wait(1000);
    cy.get("input#file_uploader").selectFile(fileName, { force: true });
    cy.log("Logo file uploaded successfully");
  }
}

module.exports = {
  ClickUpload,
  SelectLogo,
  BrowseLogo,
};
