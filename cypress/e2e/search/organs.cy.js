import {MSGS, PATHS, WAIT} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.search}.Organs`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })

    it("Can navigate to /organs page from search/entities' ", () => {

        cy.get('.navbar-nav.me-auto .nav-item').eq(0).as('toolsMenu')
        cy.get('@toolsMenu').find('#nav-dropdown--atlas').as('toolsSMenu').click()
        cy.wait(WAIT.time)
        cy.get('@toolsSMenu').parent().find('[aria-labelledby="nav-dropdown--atlas"] a').eq(2).click()
        cy.wait(WAIT.time)
        let count
        cy.get('[href="/organs/blood"] .badge').each((el, index) => {
            count = (el.text().split(' '))[0]
            cy.log('Datasets of Blood: ', count)

            // Carry on to view page
            cy.get('[href="/organs/blood"]').click()
            cy.wait(WAIT.time)
            cy.contains('UBERON:0000178')
            // Carry on to search page
            cy.contains('View on search page').click()
            cy.get('.MuiChip-label').eq(0).contains('Entity Type: Dataset')
            cy.get('.MuiChip-label').eq(1).contains('Organ: Blood')
            cy.get('[for="sui-facet--EntityType-Dataset"] .sui-multi-checkbox-facet__option-count').should('have.text', count)
        })
    })

})