import {MSGS, PATHS, DATA, WAIT, SELECTORS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.Vitesse`, () => {
    beforeEach(() => {
        cy.login()
    })

    it('Vitesse loads', () => {
        cy.viewEntity('dataset', DATA.dataset.visium.uuid)
        cy.wait(WAIT.time * 5)
        cy.contains("Powered byVitessce v4.0.0");
    })
})