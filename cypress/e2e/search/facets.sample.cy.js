import {MSGS, PATHS, SELECTORS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Facets.Sample`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    context('When selecting “Sample”', () => {
        it('Displays Sample Category facet', () => {
            cy.facets()
        })

        it("Headers include: 'SenNet ID', 'Category', 'Organ', 'Lab Sample ID', 'Group'", () => {
            cy.facets()
            //DEP: Requires headings to be in following order on the page
            const headers = ['SenNet ID', 'Category', 'Organ', 'Lab Sample ID', 'Group']
            for (let i = 0; i < headers.length; i++) {
                cy.get(SELECTORS.table.th).eq(i).should('have.text', headers[i])
            }
        })

        it('Displays Organ facet', () => {
            cy.facets()
            cy.wait(WAIT.time)
            cy.get('.sui-facet__title--Organ').should('have.text', 'Organ')
        })

        it('Organ facet is hierarchical', () => {
            cy.facets()
            cy.wait(WAIT.time)
            cy.get('.sui-facet__title--Organ').click()
            cy.wait(WAIT.time)
            cy.get('#sui-facet--Lung').parent().as('lungFacet')
            cy.get('@lungFacet').find('#sui-facet--Lung').click()
            cy.get('@lungFacet').parent().find('.collapsableFacets_contracted__dHAbX').should('exist')
        })

        // it('Displays Brain on click of + More under Organ (#136)', () => {
        //     cy.facets()
        //     cy.wait(WAIT.time)
        //     cy.get('.sui-facet__title--Organ').click()
        //     cy.wait(WAIT.time)
        //     cy.get('.sui-facet-view-more').eq(0).click()
        //     //DEP: A data specific test, this will fail if no entries are available
        //     cy.wait(WAIT.time)
        //     cy.get('[for="sui-facet--Brain-BR"] .sui-multi-checkbox-facet__input-text').eq(0).should('have.text', 'Brain')
        // })
    })

    context('When 0 items are selecting OR more than 2 are selected', () => {
        it('Entity Type header should show in results table', () => {
            cy.wait(WAIT.time)
            cy.get(SELECTORS.table.th).eq(1).should('have.text', 'Entity Type')
        })
    })
})
