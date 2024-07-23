class Search {
  typeSearchInput() {
    return cy.get("#search");
  }
  clickSearchButton() {
    return cy.xpath('//button[@title="Search"][2]').click();
  }
}
module.exports = Search;
