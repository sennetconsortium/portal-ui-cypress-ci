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
const SEARCH_TABLE = '.rdt_Table'
const TABLE_TD = '.rdt_TableCell'

const SELECTORS = {
    search: '.input-group #search',
    table: {
        main: SEARCH_TABLE,
        cell: TABLE_TD,
        ancestors: '.table--ancestors',
        th: `.rdt_TableHead .rdt_TableCol .sc-eDWCr`,
        tr: `${SEARCH_TABLE} .rdt_TableRow`,
        td: `${SEARCH_TABLE} .rdt_TableRow ${TABLE_TD}`,
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
        mouse: {
            uuid: '15f945ec3543385e6d7c191ab8321233',
            sennetId: 'SNT489.SKVP.536'
        },
        human: {
            uuid: '34fb81da75a5386d406a7b1835d92bdd',
            sennetId: 'SNT456.NJFC.364'
        }
    },
    sample: {
        organBrain: {
            uuid: '5d44c0918f5cac196b07feed76dcb4f9',
            sennetId: 'SNT875.ZVHK.264'
        },
        organ: {
            uuid: '3a54ef0a99eb5b39a0df732857bc96af',
            sennetId: 'SNT967.JSBZ.284'
        },
        block: {
            uuid: '3ffd8a087f0b8e2ffb4c5566dbd6c451',
            sennetId: 'SNT329.XDJS.568'
        }
    },
    dataset: {
        codex: {
            uuid: '6a7be8e95c62c74545a29666111899d9',
            sennetId: 'SNT554.XLGX.327'
        },
        bulkRnaSeq: {
            uuid: 'bff9c8c741bda27c391c4e992e81a27a',
            sennetId: 'SNT459.GVQN.528'
        }
    }
}

const WAIT = {
    time: Cypress.env('wait_time') || 1000
}

export { URLS, PATHS, MSGS, DATA, WAIT, SELECTORS }