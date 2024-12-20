const AUTH = {
    user: Cypress.env('username'),
    password: Cypress.env('password'),
    displayname: Cypress.env('session_displayname'),
    token: Cypress.env('token')
}

export { AUTH }