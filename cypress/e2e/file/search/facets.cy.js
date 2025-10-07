import {MSGS, PATHS, SELECTORS, WAIT} from "../../../config/constants";

describe(`${MSGS.name}.File.${MSGS.search}.Facets`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.searchFiles)
    })

    it("Facets present 'Source Type', 'Organ', 'Dataset Type', 'Analyte Class' ", () => {
        const facets = ['Source Type', 'Organ', 'Dataset Type', 'Analyte Class']
        let result = [];
        cy.wait(WAIT.time)
        cy.get('.sui-facet__title').each((el, index) => {
            const text = el.text()
            if (facets.indexOf(text) !== -1) {
                result.push(true)
            }
        })
        cy.wrap(result).its('length').should('eq', facets.length)
    })

    it("Headers include: 'Dataset SenNet ID', 'Files', 'Source', 'Organ', 'Dataset Type', 'File Types'", () => {

        //DEP: Requires headings to be in following order on the page
        const headers = ['Dataset SenNet ID', 'Files', 'Source', 'Organ', 'Dataset Type', 'File Types']
        for (let i = 0; i < headers.length; i++) {
            cy.get(SELECTORS.table.th).eq(i).should('have.text', headers[i])
        }
    })

})