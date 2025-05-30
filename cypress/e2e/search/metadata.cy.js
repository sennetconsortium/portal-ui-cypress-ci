import {MSGS, PATHS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Metadata`, () => {
    beforeEach(() => {
        cy.visit(PATHS.search)
    })

    it("Can navigate to discover/metadata page from search/entities' ", () => {
        cy.visit(PATHS.discover)
        cy.wait(WAIT.time)
        cy.get('.btn').eq(1).contains('Search').click()
        cy.wait(WAIT.time)
        cy.get('.chip-title').eq(0).contains('Entity Type')
        cy.get('.chip-title').eq(1).contains('Source Type')
    })

})