class ClickUpload {
  clickUploadButton() {
    cy.wait(20000);
    cy.xpath(
      "//button[contains(@data-bind, 'Upload Logo') and text()='Upload logo']"
    ).click({ force: true });
  }
}
module.exports = ClickUpload;
