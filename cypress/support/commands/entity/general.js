import { WAIT } from "../../../config/constants";

Cypress.Commands.add('entityCreateForm', (entity = 'Source', index = 0) => {
    cy.get('#basic-nav-dropdown').click()
    cy.get('.dropdown .dropdown-menu a').eq(index).click()
    cy.url().should('contain', `/edit/${entity.toLowerCase()}?uuid=create`)
})

Cypress.Commands.add('enterToSource', (action = 'Created') => {
    cy.get('#lab_source_id').clear().type('Aorta')
    cy.get('#source_type').select('Human')
    cy.get('#protocol_url').clear().type('https://dx.doi.org/10.17504/protocols.io.bf4cjqsw')
    cy.get('#description').clear().type('Cypress automated description source')
    cy.get('button.btn').contains('Submit').click()
    cy.wait(WAIT.time)
    cy.get('.modal-title').contains(`Source ${action}`)
    cy.copyVal()
})

Cypress.Commands.add('enterToSample', (action = 'Created') => {
    cy.get('#sample_category').select('Organ')
    cy.get('#organ').select('Brain')
    cy.get('#protocol_url').clear().type('https://dx.doi.org/10.17504/protocols.io.af4cjqsw')
    cy.get('#description').clear().type('Cypress automated description sample')
    cy.get('#lab_tissue_sample_id').clear().type(`${Math.floor(Math.random() * 1000)}-organ`)
    cy.get('button.btn').contains('Submit').click()
    cy.wait(WAIT.time)
    cy.get('.modal-title').contains(`Sample ${action}`)
    cy.copyVal()
})

Cypress.Commands.add('enterToDataset', (action = 'Created') => {
    cy.get('#lab_dataset_id').clear().type(`${Math.floor(Math.random() * 1000)}-lab`)
    cy.get('#description').clear().type('Cypress automated description dataset')
    cy.get('#dataset_info').clear().type('Additional Cypress automated description dataset')
    cy.get('#data_types').select('CODEX')
    cy.get('#contains_human_genetic_sequences[value="false"]').check()
    cy.get('button.btn').contains('Submit').click()
    cy.wait(WAIT.time)
    cy.get('.modal-title').contains(`Dataset ${action}`)
    cy.copyVal()
})

Cypress.Commands.add('selectAncestorInDataset', (id) => {
    // TODO: consolidate id name of this button in code
    cy.get('#direct_ancestor_uuid_button button').click()
    cy.wait(WAIT.time)
    cy.get('.input-group #search').clear().type(`${id}{enter}`)
    cy.wait(WAIT.time)
    cy.get('.table-responsive tr').eq(1).click()
})

Cypress.Commands.add('inputValueExists', (selectors, prop = 'val', min = 2) => {
    for (let i = 0; i < selectors.length; i++) {
        cy.get(selectors[i]).invoke(prop).should((val) => {
            expect(val.length).to.be.at.least(min)
        })
    }
})