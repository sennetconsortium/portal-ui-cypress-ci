import {MSGS, PATHS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Facets.Source`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context('When selecting “Source”', () => {

        it("Headers include: 'Created By', 'SenNet ID', 'Lab ID', 'Type', 'Group'", () => {
            cy.facets('Source', null)
            const headers = ['Created By', 'SenNet ID', 'Lab ID', 'Type', 'Group']
            //DEP: Requires headings to be in following order on the page
            for (let i = 0; i < headers.length; i++) {
                cy.get('.results-header th').eq(i).should('have.text', headers[i])
            }
        })
    })

})