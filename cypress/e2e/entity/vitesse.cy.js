import {MSGS, PATHS, DATA, WAIT, SELECTORS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.Vitesse`, () => {
    beforeEach(() => {
        cy.login()
    })

    it('Vitesse loads', () => {
        cy.viewEntity('dataset', DATA.dataset.visium.uuid)
        cy.wait(5000)
        cy.contains('Powered byVitessce V^3.9.5')
    })
})