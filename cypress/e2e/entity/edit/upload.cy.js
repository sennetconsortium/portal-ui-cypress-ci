import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Upload`, () => {


    beforeEach(() => {
        cy.login()
        cy.visit(`${PATHS.edit}/dataset?uuid=${DATA.upload.new.uuid}`)
    })

    context("Ensure success of editing Upload:", () => {
        it('Displays Hipaa', () => {
            cy.checkHipaa()
        })
        it("Values populated", () => {
            cy.get('.sui-layout-main-header').contains('SenNet ID: SN')
            cy.inputValueExists(['#title', '#description', '#intended_dataset_type', '#intended_organ', '#intended_source_type'])
        })
        it("Displays modal", () => {
            cy.enterToUpload('Updated')
        })
    })

})