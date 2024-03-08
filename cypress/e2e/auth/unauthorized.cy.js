import {MSGS, PATHS, DATA} from "../../config/constants";

describe(`${MSGS.name}.Auth`, () => {

    it('Cannot create content when not logged in', () => {
        cy.visit(`${PATHS.edit}/dataset?uuid=register`)
        cy.contains('Unauthorized')
    })

    it('Cannot edit content when not logged in', () => {
        cy.visit(`${PATHS.edit}/dataset?uuid=${DATA.dataset.rnaSeq.uuid}`)
        cy.contains('Unauthorized')
    })

})