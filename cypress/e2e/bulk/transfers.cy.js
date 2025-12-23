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

        it('Cannot proceed without selection', () => {
            cy.visit(PATHS.searchFiles)
            canGoToTransfers()
            // Next
            cy.get('.btn.btn-outline-primary').click()
            // Next
            cy.get('.btn.btn-outline-primary').click()
            cy.get('.form-inputInvalid').should('have.length', 1)
            cy.wait(WAIT.time * 2)
            cy.get('.destinationCollectionSelect__indicators').click()
            cy.get('.destinationCollectionSelect__option').eq(1).click()
            cy.get('#destination_file_path').clear().type(`/test`)
            cy.get('.btn.btn-outline-primary').click()
            cy.get('.form-inputInvalid').should('have.length', 0)
        })

       
    })

})