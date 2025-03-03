import {MSGS, PATHS, SELECTORS, WAIT} from "../config/constants";

describe(`${MSGS.name}.Clear Browsing`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Clears data', () => {
        cy.get(SELECTORS.columnToggle.type).click()
        cy.visit(PATHS.search)
        cy.get(SELECTORS.columnToggle.type).should('not.exist')
        cy.userMenu(2)
        cy.get('.swal2-confirm').click()
        cy.wait(WAIT.time)
        cy.get(SELECTORS.columnToggle.type).should('exist')

    })
})