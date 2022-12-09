import { WAIT } from "../../../config/constants";

Cypress.Commands.add('sampleConstraint', (ancestor = {name: 'Source', index: 1}, descendant = {name: 'Sample', index: 1, category: 'Organ'}, constraints = [{name: 'Organ', val: 'organ'}]) => {
    cy.entityCreateForm(descendant.name, descendant.index)
    cy.get('#direct_ancestor_uuid button').click()
    cy.facets(ancestor.name, null)
    cy.wait(WAIT.time)
    if (ancestor.category) {
        cy.get('.table-responsive td').contains(ancestor.category).click()
    } else {
        cy.get('.table-responsive tr').eq(ancestor.index).click()
    }

    cy.wait(WAIT.time)
    cy.get('#sample_category option').should('have.length', constraints.length + 1)
    for (let c of constraints) {
        if (typeof c === 'object') {
            cy.get('#sample_category').select(c.name).should('have.value', c.val)
        } else {
            cy.get('#sample_category').select(c).should('have.value', c.toLowerCase())
        }
    }
})
