import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.create}.Dataset`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context("Ensure success of creating Dataset:", () => {
        it('Displays Hipaa', () => {
            cy.entityCreateForm('Dataset', 2)
            cy.checkHipaa()
        })
        it("Displays modal", () => {
            cy.entityCreateForm('Dataset', 2)
            cy.get('#group_uuid').select('Duke University TMC')
            cy.selectAncestorInDataset(DATA.sample.sennetId)
            cy.selectAncestorInDataset(DATA.dataset.sennetId)
            cy.get('.table').contains(DATA.sample.sennetId)

            // Delete
            cy.get('.table tr').should('have.length', 3)
            cy.get('.table tr [role="button"]').eq(1).click()
            cy.get('.table tr').should('have.length', 2)
            cy.enterToDataset()
        })
    })

})