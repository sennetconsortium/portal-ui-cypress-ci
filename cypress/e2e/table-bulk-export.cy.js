
import {MSGS, PATHS, DATA, SELECTORS, WAIT} from "../config/constants";

describe(`${MSGS.name}.Table Bulk Export`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Able to check all and select menu', () => {
        cy.get(SELECTORS.table.checkAll).click()
        cy.get('.sui-selected-count')
            .invoke('attr', 'data-count')
            .then((total) => {
                cy.get(SELECTORS.table.bodyCheckbox).should('have.length', total)
            })
        cy.get('.c-searchActions button').click()
        cy.get('#sui-tbl-checkbox-actions [role="menuitem"]').should('have.length', 4)
    })


    it('Able to copy id to clipboard', () => {
        cy.get(SELECTORS.search).clear()
        cy.get(SELECTORS.search).type(`${DATA.dataset.public.sennetId}{enter}`)
        cy.wait(WAIT.time)
        cy.get('.popover-clipboard-pc sup').eq(0).click()
        cy.assertValueCopiedToClipboard(DATA.dataset.public.sennetId)
    })
})