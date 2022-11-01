import {MSGS, PATHS} from "../../config/constants";

describe(`${MSGS.name}.Auth`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Logs out after log in', () => {
        cy.contains('Sign-out').click()
        cy.contains('Logged out of Globus Auth')
    })
})