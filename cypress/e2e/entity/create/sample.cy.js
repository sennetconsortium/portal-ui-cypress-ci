import {MSGS, PATHS, DATA, WAIT} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.create}.Sample`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context("Ensure success of creating Sample:", () => {
        it('Displays Hipaa', () => {
            cy.entityCreateForm('Sample', 1)
            cy.checkHipaa()
        })
        it("Displays modal", () => {
            cy.entityCreateForm('Sample', 1)
            cy.get('#group_uuid').select('University of Pittsburgh TMC')
            cy.get('#direct_ancestor_uuid .btn').click()
            cy.get('.input-group #search').type(`${DATA.sample.sennetId}{enter}`)
            cy.wait(WAIT.time)
            cy.get('.table-responsive tr').eq(1).click()
            cy.enterToSample()
        })
    })

})