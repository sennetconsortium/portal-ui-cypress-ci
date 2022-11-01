import {MSGS, PATHS, DATA} from "../config/constants";

describe(`${MSGS.name}.Auth`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it('Displays not found alert', () => {
        cy.visit(`${PATHS.edit}/dataset?uuid=blablabla`)
        cy.contains('UUID Not found')
    })


})