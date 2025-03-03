import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Publication`, () => {


    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/dataset?uuid=${DATA.publication.new.uuid}`)
    })

    context("Ensure success of editing Publication:", () => {
        it('Displays Hipaa', () => {
            cy.checkHipaa()
        })
        it("Values populated", () => {
            cy.get('.sui-layout-main-header').contains('SenNet ID: SN')
            cy.inputValueExists(['#title', '#publication_venue', '#publication_date', '#publication_url'])
        })
        it("Displays modal", () => {
            cy.enterToPublication('Updated')
        })
    })

})