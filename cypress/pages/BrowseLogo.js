class BrowseLogo {
    uploadLogo() {
        const fileName = "../Cypress_LOGOTOOL/cypress/fixtures/Activimax.pdf";
        //cy.pause();
        cy.wait(1000 * 5);
        cy.xpath("(//input[@id='file_uploader'])[2]").selectFile(fileName, { force: true });
        cy.wait(1000 * 5);
        cy.log("Logo file uploaded successfully");
    }
  }
  
  module.exports = BrowseLogo;
  