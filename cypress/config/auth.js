const AUTH = {
    user: Cypress.env('username'),
    password: Cypress.env('password'),
    displayname: Cypress.env('session_displayname')
}

export { AUTH }