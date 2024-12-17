import {MSGS, PATHS, DATA, SELECTORS, WAIT} from "../../config/constants";

//cypress-utils stress-test e2e/stress/general.cy.js  --trialCount 8 --threads 4

describe(`${MSGS.name}.STRESS`, () => {

    beforeEach(() => {
        cy.login()
    })

    // it("Ensure success of editing Sample under STRESS:", () => {
    //     cy.interceptProtocols()
    //     cy.visit(`${PATHS.edit}/sample?uuid=${DATA.sample.organ.uuid}`)
    //     cy.checkHipaa()
    //     cy.inputValueExists(['#sample_category', '#organ', '#protocol_url'])
    //     cy.enterToSample('Updated')
    // })

    it('Able to copy id to clipboard under STRESS', () => {
        cy.visit(PATHS.search)
        cy.get(SELECTORS.search).clear()
        cy.get(SELECTORS.search).type(`${DATA.dataset.public.sennetId}{enter}`)
        cy.wait(WAIT.time)
        cy.get('.popover-clipboard-pc sup').eq(0).click()
    })


})