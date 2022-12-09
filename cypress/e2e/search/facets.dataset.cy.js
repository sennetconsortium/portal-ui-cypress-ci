import {MSGS, PATHS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Facets.Dataset`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context('When selecting “Dataset”', () => {
        
        it("Headers include: 'Created By', 'SenNet ID', 'Lab ID', 'Data Types', 'Status', 'Group'", () => {
            cy.facets('Dataset', null)
            //DEP: Requires headings to be in following order on the page
            const headers = ['Created By', 'SenNet ID', 'Lab ID', 'Data Types', 'Status', 'Group']
            for (let i = 0; i < headers.length; i++) {
                cy.get('.results-header th').eq(i).should('have.text', headers[i])
            }
        })
    })

})