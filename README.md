# Cypress Tests run with Circle CI

## Install
`npm i .`

## Run (tests before pushing to repo for Circle CI)
`npm start` # runs tests in complete Cypress GUI

OR
`npm run cli` # runs tests in terminal

## Docker 
This will serve a web socket which can be used to call the cypress tests, receiving the results back to the client in real time.
```agsl
docker build -t portal-ui-cypress-tests .
docker run -p 8765:8765 -v $PWD:/portal_ui_ci portal-ui-cypress-tests
```
### Passing params to the socket
To send various options to the socket pass a message with `params=base64_json_str_here`. The value of `base64_json_str_here` is simply an object like `{token:str, display_name:str, options:str}`
that has been stringified and encoded in base64. Example:
```
    const socket = new WebSocket("ws://localhost:8765")
    //const ops = {token: "required globus token", display_name: "required email associated with token", options: "optional cypress cli options"}
    const ops = {token: "required globus token", display_name: "jane.doe@inst.edu", options: '-- --spec "cypress/e2e/provenance/page.cy.js"'}
    // Connection opened
    socket.addEventListener("open", event => {
      const msg = `🚀 Requesting Cypress reports ... Date: ${new Date()}.\n params=${btoa(JSON.stringify(ops))}`
      socket.send(msg)
    });
```

## Environment Requirements
`cp cypress.example.env.json cypress.env.json`
- Change the values of `token` and `session_displayname` to a valid Globus token and the respective user display name, usually the email.

## Using a Globus ID for certain tests
Certain tests need an actual login process in order to verify, like the redirect to requested non-public page after login. 
To set up for such a test, you need a Globus ID and password.
- Change the values of `username` and `password` to that of your own Globus ID username and password respectively. Also set the `session_displayname`.
- You may need to create one [here](https://www.globusid.org/login).
- Then set up this new Globus ID as an alias in your [globus.org account](https://app.globus.org/).
    - Sign in to your Globus Account
    - Click *Account* in the left vertical menu bar
    - Click *Link Another Identity*. Follow the onscreen steps
    - You should be able to see your new identity listed in the *Identities* tab as `yourid@@globusid.org`

![Globus](./docs/imgs/MD-globus.png)
