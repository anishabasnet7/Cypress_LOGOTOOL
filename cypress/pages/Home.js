class Home {
  visit() {
    cy.visit("/");
  }

  searchInput(text) {
    return cy.get('input[name="search"]').first().type(text);
  }

  getSearchButton() {
    return cy.get("#search > div.search-button > button").first();
  }

  getHomeButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span"
    );
  }

  getSpecialButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(2) > a > div > span"
    );
  }

  getBlogButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(3) > a > div > span"
    );
  }

  getMegaMenuButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li.nav-item.dropdown.dropdown-hoverable.mega-menu.position-static > a > div > span"
    );
  }

  getAddOnsButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(5) > a > div > span"
    );
  }

  getMyAccountLink() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span"
    );
  }
}
module.exports = Home;
// class Home {
//   visit() {
//     cy.visit("/");
//     cy.viewport(2000, 2000);
//     cy.visit("https://uat.pfconcept.com/en_nl/");
//     cy.xpath('//ul[@class="account-nav "]/li/a').click();
//     cy.get("#email").click().type("logotooltest@javra.com");
//     cy.get("#pass").click().type("PfConcept2@18!@lt");
//     cy.get("#send2").click();
//     cy.get("#search").click().type("10050800");
//     cy.xpath('//div[@class="actions"]/button').click();
//     cy.wait(20000);
//     cy.xpath('//div[@class="quantity-tab-wrap"]/table/tbody/tr[2]/td[5]/input')
//       .click()
//       .type("1");
//     cy.xpath(
//       '//div[@class="footer-actions select-printing"]/button[1]'
//     ).click();
//     cy.xpath('//div[@class="dropdown-wrapper"]/select').select(1);
//     cy.xpath('//button[text()="Upload logo"]').click();
//     cy.wait(20000);
//     cy.xpath(
//       '//div[@class="logo-upload-container scroller"]/div[1]/div[2]/button/span'
//     ).click();
//     cy.xpath('//input[@id="file_uploader"]').selectFile(
//       '"D:/apache-jmeter-5.5/bin/PROJ/LogoTool/Logo/fila.eps"',
//       { force: true }
//     );
//     cy.wait(20000);
//     cy.xpath('//div[@class="monocolor-components"]/label/span').click();
//     cy.xpath('//div[@class="le-wrap-color-field-wrapper "]/div[1]').click();
//     y.wait(20000);
//     cy.xpath('//div[@class="le-pc-wrap"]/div[1]/div[1]/div[2]').click();
//   }
// }
