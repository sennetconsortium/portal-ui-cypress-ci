import {MSGS, PATHS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Facets`, () => {
    beforeEach(() => {
        cy.visit(PATHS.search)
    })

    it("Facets present 'Entity Type', 'Dataset Type', 'Has Spatial Information', 'Affiliation' ", () => {
        const facets = ['Entity Type', 'Dataset Type', 'Has Spatial Information', 'Affiliation']
        let result = [];
        cy.wait(WAIT.time)
        cy.get('.sui-facet__title').each((el, index) => {
            const text = el.text().trim()
            cy.log(text)
            if (facets.indexOf(text) !== -1) {
                cy.log('Found: ' + text)
                result.push(true)
            }
        })
        cy.wrap(result).its('length').should('eq', facets.length)
    })

})