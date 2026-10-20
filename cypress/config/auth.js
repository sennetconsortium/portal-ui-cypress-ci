const AUTH = {
    user: Cypress.expose('username'),
    password: Cypress.expose('password'),
    displayname: Cypress.expose('session_displayname'),
    // token: Cypress.env('token'),
    // transferToken: Cypress.env('transfer_token'),
}

export { AUTH }