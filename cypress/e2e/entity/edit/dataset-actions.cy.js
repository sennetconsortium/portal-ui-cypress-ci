import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Dataset`, () => {


    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/dataset?uuid=${DATA.dataset.rnaSeq.uuid}`)
    })

    context("Ensure success of actioning on a Dataset:", () => {

        it('Can revert', () => {
            cy.get('.btn').contains('Revert').click()
            cy.get('.modal--ctaConfirm  select').select('New')
            cy.get('.modal--ctaConfirm .js-btn--revert').contains('Revert').click()
            cy.get('.MuiSvgIcon-colorSuccess').should('have.length', 1)
        })

        it('Can validate', () => {
            cy.get('.btn').contains('Validate').click()
            cy.get('.modal--ctaConfirm .js-btn--validate').contains('Validate').click()
            cy.get('.MuiSvgIcon-colorSuccess').should('have.length', 1)
        })

        it('Can process', () => {
            cy.get('.btn').contains('Process').click()
            cy.get('.modal--ctaConfirm .js-btn--process').contains('Process').click()
            cy.get('.MuiSvgIcon-colorSuccess').should('have.length', 1)
        })


    })

})