import {MSGS, PATHS, SELECTORS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Facets.Dataset`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context('When selecting “Dataset”', () => {
        
        it("Headers include: 'SenNet ID', 'Dataset Type', 'Organ', 'Status', 'Lab Dataset ID', 'Group'", () => {
            cy.facets('Dataset', null)
            //DEP: Requires headings to be in following order on the page
            const headers = ['SenNet ID', 'Dataset Type', 'Organ', 'Status', 'Lab Dataset ID', 'Group']
            for (let i = 0; i < headers.length; i++) {
                cy.get(SELECTORS.table.th).eq(i).should('have.text', headers[i])
            }
        })
    })

})