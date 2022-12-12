import {MSGS, PATHS, DATA, WAIT, SELECTORS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.BulkUpload`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Able to bulk upload source file', () => {
        cy.bulkUploadStepOne(0, 'example_source.tsv')
        cy.get('.MuiAlert-message').contains('Validation successful please continue onto the next step')
        cy.get('[type="button"]').contains('Next').click()
        cy.get('#group_uuid').select('University of Pittsburgh TMC')
        cy.get('[type="button"]').contains('Next').click()
        cy.wait(WAIT.time * 3)
        cy.get('.MuiAlert-message').contains('Upload successful')
        cy.get('[type="button"]').contains('Finish').click()
    })

    it('Fails on upload of bad source file', () => {
        cy.bulkUploadStepOne(0, 'example_source_bad.tsv')
        cy.get('.MuiStepLabel-labelContainer .MuiStepLabel').should('have.class', 'Mui-error')
    })



})