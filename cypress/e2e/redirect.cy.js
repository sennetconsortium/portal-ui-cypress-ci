import {MSGS, PATHS, DATA, WAIT, URLS, SELECTORS} from "../config/constants";

describe(`${MSGS.name}.Redirect`, () => {

    it('User is sent back to desired page after login', () => {
        cy.interceptProtocols()
        const sampleView = `${PATHS.edit}/sample?uuid=${DATA.sample.block.uuid}/`
        cy.visit(sampleView)
        cy.contains('Unauthorized')
        cy.wait(WAIT.time)
        cy.login()
        cy.wait(WAIT.time)
        cy.log('Redirect ...')
        cy.visit(`${URLS.domain}?globus=true`,  { failOnStatusCode: false })
        cy.contains(DATA.sample.block.sennetId)
        cy.contains('Register location')
    })
})