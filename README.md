# Cypress Tests run with Circle CI

## Install
`npm i .`

## Run (tests before pushing to repo for Circle CI)
`npm start` # runs tests in complete Cypress GUI

OR
`npm run cli` # runs tests in terminal

## Environment
`cp cypress.example.env.json cypress.env.json`

- Change the values of `username` and `password` to that of your own Globus ID username and password respectively. 
- You may need to create one [here](https://www.globusid.org/login).
- Then set up this new globus ID as an alias in your [globus.org account](https://app.globus.org/).
  - Sign in to your Globus Account
  - Click *Account* in the left vertical menu bar
  - Click *Link Another Identity*. Follow the onscreen steps 
  - You should be able to see your new identity listed in the *Identities* tab as `yourid@@globusid.org`

![Provenance UI](./docs/imgs/MD-globus.png)