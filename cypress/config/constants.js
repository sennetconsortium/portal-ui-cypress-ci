const MSGS = {
    name: 'Portal-UI',
    search: 'Search',
    entity: 'Entity',
    create: 'Create',
    edit: 'Edit',
    provenance: 'Provenance-UI'
}

// Selectors that are used more than once throughout the code
// should be made into constants for reuse here.
const SEARCH_TABLE = '.table-responsive'

const SELECTORS = {
    search: '.input-group #search',
    table: {
        main: SEARCH_TABLE,
        tr: `${SEARCH_TABLE} tr`,
        td: `${SEARCH_TABLE} td`,
    },
    forms: {
        sampleCategory: '#sample_category',
        desc: '#description',
        protocolUrl: '#protocol_url',
        groupUuid: '#group_uuid'
    },
    modal: {
        title: '.modal-title'
    },
    btns: {
        default: '[type="button"]'
    }
}

const URLS = {
    domain: Cypress.env('domain') || 'https://data.dev.sennetconsortium.org/'
}

const PATHS = {
    search: `${URLS.domain}search`,
    edit: `${URLS.domain}edit`,
    view: `${URLS.domain}{entity}?uuid={id}`
}

const DATA = {
    source: {
        uuid: 'a55a3f91ea259020be1491e35a55c564',
        sennetId: 'SNT655.FQSW.448'
    },
    sample: {
        organ: {
            uuid: '7d4d1ab5ad413448511f32d212a0fd78',
            sennetId: 'SNT587.MDQF.664'
        },
        block: {
            uuid: '1610b541dd83722a0fd831d9ffe9367f',
            sennetId: 'SNT674.RWCF.767'
        }
    },
    dataset: {
        bulkRnaSeq: {
            uuid: '3ee6a090038e39af0dd536771d44caf8',
            sennetId: 'SNT546.DPNT.455'
        }
    }
}

const WAIT = {
    time: Cypress.env('wait_time') || 1000
}

export { URLS, PATHS, MSGS, DATA, WAIT, SELECTORS }