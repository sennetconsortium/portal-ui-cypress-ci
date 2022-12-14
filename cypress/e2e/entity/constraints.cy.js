import {MSGS, PATHS, DATA, WAIT, SELECTORS} from "../../config/constants";

describe(`${MSGS.name}.${MSGS.entity}.Constraints`, () => {
    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.search)
    })
    context('While creating an entity of type Sample, the following constraints apply:', () => {
        it('An Organ can be a descendant of a Source', () => {
            cy.sampleConstraint()
        })

        it('A suspension can be a descendant of a tissue section', () => {
            // DEP: Requires having a sample of type Section
            cy.sampleConstraint({name: 'Sample', category: 'Section'}, {name: 'Sample', index: 1}, ['Suspension'])
        })

        it('A suspension can be the direct descendant of an organ of type blood', () => {
            const searchTable = ($tr, constraints) => {
                cy.searchTable('SNT368.RQLR.646')
                cy.wait(WAIT.time)
                cy.checkSampleCategories(constraints)
            }
            // DEP: Requires having a sample of type Organ
            cy.basicConstraint({name: 'Sample', category: 'Organ'}, {name: 'Sample', index: 1}, ['Suspension'], {callback: searchTable})
        })

        // DEP: Requires having a sample of type Organ
        context('When a Sample of type Organ is selected as ancestor:', () => {
            it('A tissue block, section, suspension, bodily fluid, organ or organ piece can be a descendant thereof', () => {
                cy.sampleConstraint({name: 'Sample', category: 'Organ'}, {name: 'Sample', index: 1}, ['Block', 'Section', 'Suspension', 'Bodily Fluid', 'Organ', 'Organ Piece'])
            })
        })

        // DEP: Requires having a sample of type Block
        context('When a Sample of type Block is selected as ancestor:', () => {
            it('A tissue section, block or suspension can be a descendant thereof', () => {
                cy.sampleConstraint({name: 'Sample', category: 'Block'}, {name: 'Sample', index: 1}, ['Block', 'Section', 'Suspension'])
            })
        })
    })

    context('While creating an entity of type Dataset, the following constraints apply:', () => {
        it('Tissue section, block and suspension can be ancestors thereof', () => {
            const searchTable = ($tr, constraints) => {
                cy.get(`${SELECTORS.table.main} tbody tr`).each(($el, i) => {
                    const text = $el.find('td').eq(3).text()
                    cy.log('Category', text)
                    const pos = constraints.indexOf(text)
                    cy.wrap(pos).should('not.eql', -1)
                })
            }
            cy.basicConstraint({name: 'Sample' }, {name: 'Dataset', index: 2}, ['Section', 'Block', 'Suspension'], {callback: searchTable})
        })
    })


})