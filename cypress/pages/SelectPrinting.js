class SelectPrinting {
  clickSelectPrinting() {
    return cy
      .xpath(
        "//div[contains(@class, 'footer-actions')]/button[text() = 'Select printing']"
      )
      .click();
  }
}
module.exports = SelectPrinting;
