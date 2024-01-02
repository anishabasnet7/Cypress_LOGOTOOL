import "../support/commands";
import Search from "../pages/Search";
import EnterQuantity from "../pages/EnterQuantity";
import SelectPrinting from "../pages/SelectPrinting";
import { ClickUpload, SelectLogo, BrowseLogo } from "../pages/ClickUpload";
import Continue from "../pages/Continue";
describe("Login", () => {
  before(() => {
    cy.login();
  });

  it("Happy Flow", function () {
    // Search item
    const search = new Search();
    search.typeSearchInput().type("38029010");
    search.clickSearchButton();
    cy.wait(10000);

    // Enter Quantity
    const enterQuantity = new EnterQuantity();
    enterQuantity.enterNumber();

    // Select Printing
    const selectPrinting = new SelectPrinting();
    selectPrinting.clickSelectPrinting();
    cy.get(".method-header").each(($methodHeader, index) => {
      cy.log(`Method Header ${index + 1}: ${$methodHeader.text()}`);
    });
    selectPrinting.selectRandomMethod();

    // Select Position
    cy.selectPosition();

    // Select numbers of color allowed
    cy.numberOfColorsAllowed();

    // Click Upload Logo button
    const clickUpload = new ClickUpload();
    clickUpload.clickUploadButton();

    const clickLogoUpload = new SelectLogo();
    clickLogoUpload.clickLogoUploadButton();

    // Upload Logo
    const browseLogo = new BrowseLogo();
    const logoPath = "NBC.pdf";
    browseLogo.uploadLogo(logoPath);

    //Continue Ordering
    // const continueButton = new Continue();
    // continueButton.clickContinueButton();
  });
});
