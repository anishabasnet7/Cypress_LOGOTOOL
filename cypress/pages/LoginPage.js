class LoginPage {
  navigate() {
    cy.visit("https://uat.pfconcept.com/en_cz/");
  }
  clickSignin() {
    return cy.get(".has-pf-drop-down > .icon").should("be.visible");
  }
  enterEmail() {
    return cy.get("#email");
  }
  enterPassword() {
    return cy.get("#pass");
  }
  submit() {
    return cy.get("#send2");
  }
}
export default LoginPage;
