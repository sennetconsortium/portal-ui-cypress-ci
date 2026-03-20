import {MSGS, PATHS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Auth`, () => {
    

    it('Logs out after log in', () => {
        cy.login()
        cy.visit(PATHS.search)
        cy.userMenu(3)
        cy.wait(WAIT.time * 5)
        cy.contains('SenNet Data Sharing Portal').click()
        // TODO: Investigate why cookie deletion from ingest-api does not work within cypress
        cy.contains('Log in')
    })
})