import Search from "../pages/Search";
import EnterQuantity from "../pages/EnterQuantity";
import SelectPrinting from "../pages/SelectPrinting,js";
describe("Login", () => {
  before(() => {
    // Log in before each test case
    cy.login();
  });
  it("Happy Flow", function () {
    //Search item
    const search = new Search();
    search.typeSearchInput().type("38029010"); //38029010
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
    // Get the list of method headers
    cy.get(".method-header").each(($methodHeader, index) => {
      cy.log(`Method Header ${index + 1}: ${$methodHeader.text()}`);
    });
    // Get the total count of method-header elements
    cy.get(".method-header")
      .its("length")
      .then((methodCount) => {
        const randomIndex = Cypress._.random(0, methodCount - 1);
        // Select and click on the method at the random index
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
        cy.log(`Positions ${index + 1}: ${$selector.text()}`);
      }
    );
    cy.xpath(
      "//div[@class='option-header']//span[contains(@class, 'selector')]"
    )
      .its("length")
      .then((positionCount) => {
        const randomIndex = Cypress._.random(0, positionCount - 1);
        // Select and click on the method at the random index
        cy.xpath(
          "//div[@class='option-header']//span[contains(@class, 'selector')]"
        )
          .eq(randomIndex)
          .then(($selectedPosition) => {
            $selectedPosition.click();
            // Log the label of the selected position
            const label = $selectedPosition
              .closest(".option-header")
              .find(".label")
              .text();
            cy.log(`Selected Position Label: ${label}`);
          });
      });
    //Select numbers of color allowed
    cy.xpath('//div[@class="dropdown-wrapper"]/select')
      .find("option:not(:first-child)") // Exclude the first option
      .then(($options) => {
        const randomIndex = Cypress._.random(0, $options.length - 1);
        const randomOption = $options[randomIndex]; // Get the random option element
        const randomValue = Cypress.$(randomOption).val(); // Get the value of the random option
        cy.xpath('//div[@class="dropdown-wrapper"]/select').select(randomValue);
        cy.xpath('//div[@class="dropdown-wrapper"]/select').should(
          "have.value",
          randomValue
        ); // Assert that the selected option value matches the random value
      });
  });
});
