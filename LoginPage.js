class LoginPage {
  navigate() {
    cy.visit("https://stage.pfconcept.com/en_cz");
  }
  clickSignin() {
    cy.wait(5000);
    return cy
      .xpath(
        "//li[contains(@class, 'account-signin') and contains(@class, 'pf-dropdown-menu')]"
      )
      .should("be.visible");
  }
  enterEmail() {
    return cy.get("#email", { timeout: 10000 });
  }
  enterPassword() {
    return cy.get("#pass");
  }
  submit() {
    return cy.get("#send2");
  }
}
export default LoginPage;
