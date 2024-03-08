import {MSGS, PATHS, DATA, WAIT, SELECTORS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.Vitesse`, () => {
    beforeEach(() => {
        cy.login()
    })

    it('Vitesse loads', () => {
        cy.viewEntity('dataset', DATA.dataset.histology.uuid)
        cy.contains('Powered byVitessce V3.3.7')
    })
})