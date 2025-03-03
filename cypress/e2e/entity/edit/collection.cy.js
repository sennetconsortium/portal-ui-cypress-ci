import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Collection`, () => {


    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/collection?uuid=${DATA.collection.withDataset.uuid}`)
    })

    context("Ensure success of editing Collection:", () => {
        it('Displays Hipaa', () => {
            cy.checkHipaa()
        })
        it("Values populated", () => {
            cy.get('.sui-layout-main-header').contains('SenNet ID: SN')
            cy.inputValueExists(['#title', '#description'])
        })
        it("Displays modal", () => {
            cy.enterToCollection('Updated')
        })
    })

})