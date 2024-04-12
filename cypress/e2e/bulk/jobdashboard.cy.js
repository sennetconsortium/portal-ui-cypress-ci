import {MSGS, PATHS, DATA, SELECTORS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.JobDashboard`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context("Ensure job dashboard functionality", () => {

        it('Filters correctly', () => {
            cy.bulkDoStepOne(1, 'example_source_bad.tsv', 'Metadata')
            cy.wait(WAIT.time * 5)
            cy.get('.MuiAlert-message .badge-danger').contains('Error')
            cy.get('.MuiAlert-message a').contains('Job Dashboard').click()
            cy.wait(WAIT.time * 2)
            cy
                .get('.sui-filterableComponent .form-control')
                .invoke('val')
                .then(jobId => {
                    cy.log('JOB ID', jobId)
                    cy.get('[data-field="job_id"]').contains(jobId)
                })

        })

        it('Color toggler works', () => {
            cy.visit(PATHS.jobs.admin)
            const checkbox = '.btn-illusion-secondary .form-check-input'
            cy.get(checkbox).check()
            cy.get('.color-wheel').should('have.length', 1)
            cy.get(checkbox).uncheck()
            cy.get('.color-wheel').should('have.length', 0)
        })

        it('Modal works', () => {
            cy.visit(PATHS.jobs.admin)
            cy.contains('View details').eq(0).click()
            cy.get('.modal-title').should('have.length', 1)
        })

    })

})