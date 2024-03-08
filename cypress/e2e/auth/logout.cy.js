import {MSGS, PATHS} from "../../config/constants";
import {AUTH} from "../../config/auth";

describe(`${MSGS.name}.Auth`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Logs out after log in', () => {
        cy.contains(AUTH.displayname).click()
        cy.get('[aria-labelledby="nav-dropdown--user"] a').eq(1).click()
        cy.visit(PATHS.search)
        // TODO: Investigate why cookie deletion from ingest-api does not work within cypress
        cy.contains('Log in')
    })
})