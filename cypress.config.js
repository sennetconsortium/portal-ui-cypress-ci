const { defineConfig } = require("cypress");
const fs = require('fs')
const process = require('node:process');

const { exec } = require('child_process');
const pythonLogger = process.cwd() + '/.venv/bin/python ci/cypress_reporter.py'
require('dotenv').config();


module.exports = defineConfig({
  chromeWebSecurity: false,
  env: {
    token: process.env.GLOBUS_TOKEN,
    transfer_token: process.env.TRANSFER_TOKEN
  },
  expose: {
    wait_time: 1000,
    domain: process.env.DOMAIN || 'https://data.dev.sennetconsortium.org/',
    ubkg_server: process.env.UBKG_SERVER || 'https://ontology-api.dev.hubmapconsortium.org/',
    username: process.env.GLOBUS_USERNAME,
    session_displayname: process.env.GLOBUS_SESSION_DISPLAYNAME
  },
  e2e: {
    excludeSpecPattern: "**/entity/create/*.cy.js",
    experimentalSessionAndOrigin: true,
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // try {
      //   on('after:spec', (spec, results) => {
      //
      //     exec(`${pythonLogger} ${btoa(JSON.stringify(results))}`, (err, stdout, stderr) => {
      //       if (err) {
      //         console.error(`error: ${err.message}`);
      //         return;
      //       }
      //
      //       if (stderr) {
      //         console.error(`stderr: ${stderr}`);
      //         return;
      //       }
      //
      //       console.log(`stdout:\n${stdout}`);
      //     });
      //
      //   })
      //
      //   on('after:run', (results) => {
      //     exec(`${pythonLogger} ${btoa(JSON.stringify({'complete': true}))}`, (err, stdout, stderr) => {
      //     });
      //     fs.writeFileSync('./ci/logs/last-run-tests-results.json', JSON.stringify(results));
      //   });
      // } catch (e) {
      //   console.error(e)
      // }

      return config;
    },
  },
});
