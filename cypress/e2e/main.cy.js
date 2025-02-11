import "../support/commands";
import Search from "../pages/Search";
import EnterQuantity from "../pages/EnterQuantity";
import SelectPrinting from "../pages/SelectPrintTechnique";
import { ClickUpload, SelectLogo } from "../pages/ClickUpload";
import BrowseLogo from "../pages/BrowseLogo";
import Continue from "../pages/ContinueWithOrder";
import DesignSave from "../pages/DesignSave";
import AddCart from "../pages/AddCart";
import EProof from "../pages/EProof";

describe("Login", () => {
  before(() => {
    cy.login();
  });

  it("Happy Flow", function () {
    // // Search item
    // const search = new Search();
    // search.typeSearchInput().type("19549655");
    // search.clickSearchButton();
    cy.wait(1000 * 20);

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

    // Browse Logo
    const browseLogo = new BrowseLogo();
    browseLogo.uploadLogo();

    // Continue Ordering
    Continue.performActions();

    //Design Save
    const designSaving = new DesignSave();
    designSaving.continueDesign();

    // Download eProof
    const eProof = new EProof();
    eProof.downloadEProof();
    
    //Add to Cart
    const addtoCart = new AddCart();
    addtoCart.clickAddCart();
  });
});