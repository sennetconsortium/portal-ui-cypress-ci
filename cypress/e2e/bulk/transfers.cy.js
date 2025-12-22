import {MSGS, PATHS, DATA, SELECTORS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Transfers`, () => {
    beforeEach(() => {
        cy.login()
    })

    const canGoToTransfers = () => {
      cy.get('.rdt_TableCell [type="checkbox"]').eq(0).click()
      cy.get('.c-searchActions button').click()
      cy.contains('Transfer Files').click()
      cy.wait(WAIT.time * 2)
      cy.get('.rdt_TableRow').should('have.length', 1)
    }

    context("Ensure user can go to transfers page", () => {

        it('Can tranfer files from Search Entities', () => {
            cy.visit(PATHS.search)
            cy.facets('Dataset', null)
            canGoToTransfers()
        })

        it('Can tranfer files from Search Files', () => {
            cy.visit(PATHS.searchFiles)
            canGoToTransfers()
        })

        it('Cannot proceed if no rows', () => {
            cy.visit(PATHS.searchFiles)
            canGoToTransfers()
            cy.get('.btn-delete-file-transfer-row').click()
            cy.get('.btn.btn-outline-primary').should('be.disabled')
            cy.get('button[aria-label="Add"]').click()
            canGoToTransfers()
            cy.get('.btn.btn-outline-primary').should('not.be.disabled')
        })
    })

})