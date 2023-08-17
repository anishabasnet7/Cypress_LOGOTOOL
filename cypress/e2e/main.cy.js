import Search from "../pages/Search";
import EnterQuantity from "../pages/EnterQuantity";
describe("Search functionality with login", () => {
  before(() => {
    // Log in before each test case
    cy.login();
  });
  it("Should search the given item(s)", function () {
    const search = new Search();
    search.typeSearchInput().type("38029010");
    search.clickSearchButton();
    cy.wait(10000);

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
        cy.log("No enabled input fields found.");
      }
    });
  });
});
