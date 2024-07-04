const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    excludeSpecPattern: "**/entity/create/*.cy.js",
    experimentalSessionAndOrigin: true,
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('after:spec', (spec, results) => {
        console.log('Spec', results.totalTests)
        fs.writeFileSync('./logs/tests.json', JSON.stringify(results))
      })

      on('after:run', (results) => {
        console.log('After run', results.totalTests)
        fs.writeFileSync('./logs/complete.json', JSON.stringify(results));
      });

    },
  },
});
