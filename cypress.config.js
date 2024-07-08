const { defineConfig } = require("cypress");
const fs = require('fs')
const process = require('node:process');

const { exec } = require('child_process');
const pythonLogger = process.cwd() + '/.venv/bin/python ci/cypress_reporter.py'

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    excludeSpecPattern: "**/entity/create/*.cy.js",
    experimentalSessionAndOrigin: true,
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('after:spec', (spec, results) => {

        exec(`${pythonLogger} ${btoa(JSON.stringify(results))}`, (err, stdout, stderr) => {
          if (err) {
            console.error(`error: ${err.message}`);
            return;
          }

          if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
          }

          console.log(`stdout:\n${stdout}`);
        });

      })

      on('after:run', (results) => {
        exec(`${pythonLogger} ${btoa(JSON.stringify({'complete': true}))}`, (err, stdout, stderr) => {
        });
        fs.writeFileSync('./ci/logs/last-run-tests-results.json', JSON.stringify(results));
      });

    },
  },
});
