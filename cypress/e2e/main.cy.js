import "../support/commands";
import Search from "../pages/Search";
import EnterQuantity from "../pages/EnterQuantity";
import SelectPrinting from "../pages/SelectPrinting";
import ClickUpload from "../pages/ClickUpload";
describe("Login", () => {
  before(() => {
    cy.login();
  });

  it("Happy Flow", function () {
    //Search item
    const search = new Search();
    search.typeSearchInput().type("38029010");
    search.clickSearchButton();
    cy.wait(10000);

    //Enter Quantity
    const enterQuantity = new EnterQuantity();
    enterQuantity.listQuantity().then((inputFields) => {
      inputFields.each((inputField, index) => {
        // Loop through all input fields
        const status = Cypress.$(inputField).is(":disabled") // Determine if the input field is enabled or disabled
          ? "disabled"
          : "enabled";
        cy.log(`Input Field ${index + 1} is ${status}`);
      });
      const enabledInputFields = inputFields.filter(
        // Filter enabled input fields
        (index, inputField) => !Cypress.$(inputField).is(":disabled")
      );
      cy.log(enabledInputFields);
      if (enabledInputFields.length > 0) {
        // Check if there are enabled input fields
        const quantity = "5";
        cy.get(enabledInputFields).eq(0).type(quantity);
        cy.log(`Entered ${quantity} into the quantity field`);
      } else {
        cy.log(`No enabled input fields found.`);
      }
    });

    //Select Printing
    const selectPrinting = new SelectPrinting();
    selectPrinting.clickSelectPrinting();
    cy.get(".method-header").each(($methodHeader, index) => {
      cy.log(`Method Header ${index + 1}: ${$methodHeader.text()}`);
    });
    cy.get(".method-header")
      .its("length")
      .then((methodCount) => {
        const randomIndex = Cypress._.random(0, methodCount - 1);
        cy.get(".method-header")
          .eq(randomIndex)
          .then(($selectedMethodHeader) => {
            const selectedMethodText = $selectedMethodHeader.text();
            cy.log(`Selected Method: ${selectedMethodText}`);
            $selectedMethodHeader.click();
          });
      });

    //Select Position
    cy.xpath("//div[@class='option-header']//span[@class='label']").each(
      ($selector, index) => {
        cy.log(`Position ${index + 1}: ${$selector.text()}`);
      }
    );
    //Check if the selected position exists
    cy.xpath(
      "count(//div[@class='option-header']//span[contains(@class, 'selector selected')])"
    ).then((count) => {
      if (count) {
        cy.log(`1st method is selected`);
      } else {
        cy.xpath(
          "(//div[@class='option-header']//span[contains(@class, 'selector')])[1]"
        ).click();
      }
    });

    //Select numbers of color allowed
    cy.numberOfColorsAllowed();

    // "Upload logo" button
    const clickUpload = new ClickUpload();
    clickUpload.clickUploadButton();
  });
});
