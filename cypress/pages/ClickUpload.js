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
module.exports = {
  ClickUpload,
  SelectLogo,
};
