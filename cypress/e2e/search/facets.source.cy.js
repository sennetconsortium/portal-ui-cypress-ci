import {MSGS, PATHS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Facets.Source`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context('When selecting “Source”', () => {

        it("Headers include: 'SenNet ID', 'Group', 'Type', 'Last Modified'", () => {
            cy.facets('Source', null)
            const headers = ['SenNet ID', 'Group', 'Type', 'Last Modified']
            //DEP: Requires headings to be in following order on the page
            for (let i = 0; i < headers.length; i++) {
                cy.get('.results-header th').eq(i).should('have.text', headers[i])
            }
        })
    })

})