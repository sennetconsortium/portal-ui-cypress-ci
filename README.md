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

## Environment
`cp cypress.example.env.json cypress.env.json`
- Change the values of `token` and `session_displayname` to a valid Globus token and the respective user display name, usually the email.



