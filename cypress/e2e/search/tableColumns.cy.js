import {MSGS, PATHS, SELECTORS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Table Columns`, () => {
    beforeEach(() => {
        cy.visit(PATHS.search)
    })

    const removeColumn = () => cy.get(SELECTORS.columnToggle.type).click()
    const checkToggle = () => {
        cy.get(SELECTORS.columnToggle.type).should('not.exist')
        cy.get(SELECTORS.columnToggle.column).contains('Type')
    }

    it("Can remove column", () => {
        removeColumn()
        checkToggle()
    })

    it("Table should return to default state", () => {
        removeColumn()
        checkToggle()
        cy.get('.clear-filter-button').click()
        cy.get('.rdt_TableHead [data-column-id="source_type"]').should('not.exist')
    })

})