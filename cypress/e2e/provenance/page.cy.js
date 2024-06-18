import {MSGS, PATHS, DATA, WAIT} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.provenance}.Page`, () => {

    beforeEach(() => {
        cy.login()

    })

    context('Ensure provenance loads', () => {
        it('Displays nodes', () => {
            cy.wait(WAIT.time)
            cy.viewEntity('dataset', DATA.dataset.rnaSeq.uuid)
            cy.get('.js-provenance .node').should('have.length.gte', 1)
        })
        it('Expand button loads modal with provenance', () => {
            cy.viewEntity('dataset', DATA.dataset.rnaSeq.uuid)
            cy.get('#Provenance .js-legend--Expand').eq(0).click()
            cy.get('.modal-full').should('have.length', 1)
            cy.get('.modal-full .modal-title').contains('Provenance')
            cy.get('.modal-full .js-provenance .node').should('have.length.gte', 1)
        })

        it('Clicking metadata button simultaneously selects node', () => {
            cy.viewEntity('dataset', DATA.dataset.codex.uuid)
            cy.wait(WAIT.time * 3)
            cy.get('#Metadata-collapse .nav-item a').eq(0).click()
            cy.get('.node.is-active').should('have.length.gte', 1)
        })

        it('Clicking node simultaneously selects metadata button', () => {
            cy.viewEntity('dataset', DATA.dataset.codex.uuid)
            cy.get('#node--3c4fc147a08429f58856779fcde96f42').click()
            cy.get('#Metadata-collapse [data-uuid="3c4fc147a08429f58856779fcde96f42"].active').should('have.length.gte', 1)
        })

    })

})