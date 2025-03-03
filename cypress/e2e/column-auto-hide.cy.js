

import {MSGS, PATHS, WAIT} from "../config/constants";

describe(`${MSGS.name}.ColumnAutoHide`, () => {
    beforeEach(() => {
        cy.login()
    })

    it('Hides empty column', () => {
        const url = PATHS.view.replace('{entity}', 'upload').replace('{id}', 'f48457399a2b97bd95f81beaf492b2b2')
        cy.visit({url, failOnStatusCode: false })
        cy.wait(WAIT.time * 2)
        cy.contains('Lab Dataset ID').should('not.exist')
    })

    it('Shows not fully empty column', () => {
        const url = PATHS.view.replace('{entity}', 'upload').replace('{id}', '6eab980b99a15138d0d58877fecbaed9')
        cy.visit({url, failOnStatusCode: false })
        cy.wait(WAIT.time * 2)
        cy.contains('Lab Dataset ID').should('exist')
    })

})