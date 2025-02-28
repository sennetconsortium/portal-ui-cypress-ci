import {MSGS, PATHS, WAIT} from "../../config/constants";
import {AUTH} from "../../config/auth";

describe(`${MSGS.name}.Auth`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Logs out after log in', () => {
        cy.contains(AUTH.displayname).click()
        cy.get('.navbar-nav:not(.me-auto) .nav-item').eq(1).as('userMenu')
        cy.get('@userMenu').find('#nav-dropdown--user')
        cy.get('@userMenu').find('[aria-labelledby="nav-dropdown--user"] a').eq(3).should('be.visible').click()
        cy.visit(PATHS.search)
        // TODO: Investigate why cookie deletion from ingest-api does not work within cypress
        cy.contains('Log in')
    })
})