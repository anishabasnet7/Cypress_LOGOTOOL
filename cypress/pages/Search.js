class Search {
  typeSearchInput() {
    return cy.get("#search");
  }
  clickSearchButton() {
    return cy.get('button[title="Search"]').click();
  }
}
module.exports = Search;
