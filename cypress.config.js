const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pfconcept.com/en_nl/",
    viewportHeight: 2000,
    viewportWidth: 1800,
  },
});
