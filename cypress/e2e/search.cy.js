import Search from "../pages/Search";
describe("Search functionality with login", () => {
  beforeEach(() => {
    // Log in before each test case
    cy.login();
  });
  it("Should search the given item(s)", function () {
    const search = new Search();
    search.clickSearch().type("12018102");
  });
});
