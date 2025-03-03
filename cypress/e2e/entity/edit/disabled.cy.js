import {MSGS, PATHS, DATA} from "../../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.${MSGS.edit}.Source.Disabled`, () => {
    beforeEach(() => {
        cy.login()
        cy.interceptProtocols()
        cy.visit(`${PATHS.edit}/source?uuid=${DATA.source.public.uuid}`)
    })

    context("Ensure public Source is disabled:", () => {
        it("Values populated", () => {
            cy.inputValueExists(['#lab_source_id', '#protocol_url', '#source_type'])
        })

        it("Form disabled", () => {
            for (let f of ['#lab_source_id', '#protocol_url', '#source_type', '#description', '.js-btn--save', '.image-selector-pc button']) {
                cy.get(f).should('be.disabled')
            }
        })
    })

})