# Cypress Tests run with Circle CI

## Install
`npm i .`

## Run (tests before pushing to repo for Circle CI)
`npm start` # runs tests in complete Cypress GUI

OR
`npm run cli` # runs tests in terminal

## Environment
`cp cypress.example.env.json cypress.env.json`

Change to your own Globus ID username and password. You may need to create one [here](https://www.globusid.org/login).
