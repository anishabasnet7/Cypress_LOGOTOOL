const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://uat.pfconcept.com/en_cz/",
    viewportHeight: 2000,
    viewportWidth: 1800,
  },
});
