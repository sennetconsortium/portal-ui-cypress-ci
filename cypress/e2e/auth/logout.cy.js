import {MSGS, PATHS} from "../../config/constants";

describe(`${MSGS.name}.Auth`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Logs out after log in', () => {
        cy.contains('Log out').click()
        cy.visit(PATHS.search)
        // TODO: Investigate why cookie deletion from ingest-api does not work within cypress
        cy.contains('Invalid Token')
    })
})