import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Dataset`, () => {

    // TODO: enable if single registration ever comes in again
    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/dataset?uuid=${DATA.dataset.rnaSeq.uuid}`)
    })

    context("Ensure success of editing Dataset:", () => {
        it('Displays Hipaa', () => {
            cy.checkHipaa()
        })
        it("Values populated", () => {
            cy.get('.sui-layout-main-header').contains('SenNet ID: SN')
            cy.inputValueExists(['#lab_dataset_id', '#dataset_type'])
        })
        it("Displays modal", () => {
            cy.enterToDataset('Updated')
        })
    })

})