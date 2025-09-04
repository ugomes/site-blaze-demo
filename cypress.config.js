const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  e2e: {
    baseUrl: 'https://www.blazedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: false,
    videosFolder: 'cypress/videos',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de Testes - Blaze Demo',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,

    },
    experimentalStudio: true,


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },

  },
});
