const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pfconcept.com/en_nl/",
    viewportWidth: 1500,
    viewportHeight: 1000,
    video: true, 
    videoCompression: 32,
  },
});
