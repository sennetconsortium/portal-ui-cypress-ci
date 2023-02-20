import {MSGS, PATHS, DATA, SELECTORS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.create}.MetadataValidation`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context("Ensure metadata validation", () => {
        it('Fails on bad metadata', () => {
            cy.entityCreateForm('Dataset', 2)
            cy.get('#entity_metadata').selectFile(`cypress/fixtures/metadata-invalid.tsv`, {force: true})
            cy.wait(WAIT.time * 4)
            cy.contains('Unacceptable Metadata')
            cy.get('.c-metadataUpload__table.table-responsive.has-error').should('have.length', 1)
        })

        it('Passes on good metadata', () => {
            cy.entityCreateForm('Dataset', 2)
            cy.wait(WAIT.time * 3)
            cy.get('#entity_metadata').selectFile(`cypress/fixtures/metadata-valid.tsv`, {force: true})
            cy.contains('Unacceptable Metadata').should('not.exist')
        })

    })

})