import { WAIT, SELECTORS } from "../../../config/constants";

Cypress.Commands.add('entityCreateForm', (entity = 'Source', index = 0) => {
    cy.get('#basic-nav-dropdown').click()
    cy.get('.dropdown .dropdown-menu a').eq(index).click()
    cy.url().should('contain', `/edit/${entity.toLowerCase()}?uuid=create`)
})

Cypress.Commands.add('submitAndCheckModalTitle', (entity, action) => {
    cy.get('button.btn').contains('Submit').click()
    cy.wait(WAIT.time)
    cy.get(SELECTORS.modal.title).contains(`${entity} ${action}`)
    cy.copyVal()
})

Cypress.Commands.add('enterToSource', (action = 'Created') => {
    cy.get('#lab_source_id').clear().type('Aorta')
    cy.get('#source_type').select('Human')
    cy.get(SELECTORS.forms.protocolUrl).clear().type('https://dx.doi.org/10.17504/protocols.io.bf4cjqsw')
    cy.get(SELECTORS.forms.desc).clear().type('Cypress automated description source')
    cy.submitAndCheckModalTitle('Source', action)
})

Cypress.Commands.add('enterToSample', (action = 'Created') => {
    cy.get(SELECTORS.forms.sampleCategory).select('Organ')
    cy.get('#organ').select('Brain')
    cy.get(SELECTORS.forms.protocolUrl).clear().type('https://dx.doi.org/10.17504/protocols.io.af4cjqsw')
    cy.get(SELECTORS.forms.desc).clear().type('Cypress automated description sample')
    cy.get('#lab_tissue_sample_id').clear().type(`${Math.floor(Math.random() * 1000)}-organ`)
    cy.submitAndCheckModalTitle('Sample', action)
})

Cypress.Commands.add('enterToDataset', (action = 'Created') => {
    cy.get('#lab_dataset_id').clear().type(`${Math.floor(Math.random() * 1000)}-lab`)
    cy.get(SELECTORS.forms.desc).clear().type('Cypress automated description dataset')
    cy.get('#dataset_info').clear().type('Additional Cypress automated description dataset')
    cy.get('#data_types').select('CODEX')
    cy.get('#contains_human_genetic_sequences[value="false"]').check()
    cy.submitAndCheckModalTitle('Dataset', action)
})

Cypress.Commands.add('searchTable', (keyword) => {
    cy.get(SELECTORS.search).clear().type(`${keyword}{enter}`)
    cy.wait(WAIT.time)
    cy.get(SELECTORS.table.tr).eq(1).click()
})

Cypress.Commands.add('clickAddAncestorButton', (id) => {
    // TODO: consolidate id name of this button in code
    cy.get('#direct_ancestor_uuid button, #direct_ancestor_uuid_button button').click()
})

Cypress.Commands.add('selectAncestorInDataset', (id) => {
    cy.clickAddAncestorButton()
    cy.wait(WAIT.time)
    cy.searchTable(id)
})

Cypress.Commands.add('inputValueExists', (selectors, prop = 'val', min = 2) => {
    for (let i = 0; i < selectors.length; i++) {
        cy.get(selectors[i]).invoke(prop).should((val) => {
            expect(val.length).to.be.at.least(min)
        })
    }
})