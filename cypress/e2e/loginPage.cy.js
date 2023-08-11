import LoginPage from "../pages/LoginPage";
const loginpage = new LoginPage();
describe("Cypress POM Test Suite", function () {
  before(function () {
    cy.fixture("credentials").then(function (testdata) {
      this.testdata = testdata;
    });
  });
  it("Login with valid credentials", function () {
    const login = new LoginPage();
    login.navigate();
    login.clickSignin().click();
    login.enterEmail().type(this.testdata.username);
    //cy.wait(5000);
    login.enterPassword().click().type(this.testdata.password);
    login.submit().click();
    cy.url().should("be.equal", this.testdata.adminUrl);
  });
});
