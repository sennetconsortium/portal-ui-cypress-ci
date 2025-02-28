import {MSGS, PATHS, SELECTORS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Facets.Source`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context('When selecting “Source”', () => {

        it("Headers include: 'SenNet ID', 'Type', 'Lab Source ID', 'Group'", () => {
            cy.facets('Source', null)
            const headers = ['SenNet ID', 'Type', 'Lab Source ID', 'Group']
            //DEP: Requires headings to be in following order on the page
            for (let i = 0; i < headers.length; i++) {
                cy.get(SELECTORS.table.th).eq(i).should('have.text', headers[i])
            }
        })
    })

})