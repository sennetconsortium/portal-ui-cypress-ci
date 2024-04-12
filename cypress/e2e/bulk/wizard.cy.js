import {MSGS, PATHS, DATA, SELECTORS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.BulkWizard`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context("Ensure bulk wizard", () => {
        it('Able to bulk register source', () => {
            cy.bulkDoStepOne(0, 'example_source_1_line.tsv')
            cy.wait(WAIT.time * 7)
            cy.get('.MuiAlert-message').contains('Validation successful please continue onto the next step')
            cy.get(SELECTORS.btns.default).contains('Next').click()
            cy.wait(WAIT.time * 7)
            cy.get(SELECTORS.modal.title).contains('Sources registered')
            cy.get('.modal-footer .btn').eq(0).contains('Close').click()
            cy.wait(WAIT.time * 2)
            cy.get('.MuiAlert-message > div div').eq(1).contains('You may remain on this page until the job has a Complete status.')
            cy.get(SELECTORS.btns.default).contains('Finish').click()
        })

        it('Fails on bad sample.block', () => {
            cy.bulkDoStepOne(1, 'example_source_bad.tsv', 'Metadata')
            //cy.get('.MuiStepLabel-labelContainer .MuiStepLabel-label').should('have.class', 'Mui-error')
            cy.wait(WAIT.time * 5)
            cy.get('.MuiAlert-message .badge-danger').contains('Error')
            cy.get('.MuiAlert-message a').contains('Job Dashboard').click()

        })

    })

})