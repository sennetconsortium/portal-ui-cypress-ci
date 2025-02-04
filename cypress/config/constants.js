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
        checkAll: '.sui-check-all input',
        bodyCheckbox: `.rdt_TableBody input[type="checkbox"]`,
        main: SEARCH_TABLE,
        cell: TABLE_TD,
        ancestors: '.table--ancestors',
        th: `.rdt_TableHead .rdt_TableCol [role="columnheader"] [data-column-id]`,
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
    },
    columnToggle: {
        type: '.sui-columns-toggle [aria-label="Remove Type"]',
        column: '.rdt_TableHead [data-column-id="source_type"]'
    }
}

const URLS = {
    domain: Cypress.env('domain') || 'https://data.dev.sennetconsortium.org/',
    ubkg: Cypress.env('ubkg_server') || 'https://ontology-api.dev.hubmapconsortium.org/'  //https://ontology.api.hubmapconsortium.org/
}

const PATHS = {
    search: `${URLS.domain}search`,
    searchFiles: `${URLS.domain}search/files`,
    edit: `${URLS.domain}edit`,
    view: `${URLS.domain}{entity}?uuid={id}`,
    jobs: {
      admin: `${URLS.domain}admin/jobs`,
    },
    api: {
        base: `${URLS.domain}api`,
        ontology: `${URLS.domain}api/ontology/{code}`
    }
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
            uuid: '3a54ef0a99eb5b39a0df732857bc96af',
            sennetId: 'SNT967.JSBZ.284'
        },
        organ: {
            uuid: '8ffbec4c455e024e943eb7af30874bdd',
            sennetId: 'SNT672.KZLK.674'
        },
        block: {
            uuid: '3ffd8a087f0b8e2ffb4c5566dbd6c451',
            sennetId: 'SNT329.XDJS.568'
        },
        section: {
            uuid: '88e99a8332dc4f1ab71c668a0cdcdd63',
            sennetId: 'SNT576.VGWF.323'
        }
    },
    dataset: {
        public: {
            uuid: '73d69feef1aa022bb5f1fb0c204de4b0',
            sennetId: 'SNT382.THVR.486'
        },
        rnaSeq: {
            uuid: '7b59d7edad5a1bf8b60be94ed3abb48c',
            sennetId: 'SNT643.PNFP.449'
        },
        snRNAseq: {
            uuid: '3cba95bf0f16cb0bd86f054a7f52efea',
            sennetId: 'SNT877.CBGD.772'
        },
        visium: {
            uuid: '599a7980b52ea36af473877d5717ab5a',
            sennetId: 'SNT527.XVMQ.535',
            source: '4db6b80dd183311ff97548f44b727b59'
        }
    }
}

const WAIT = {
    time: Cypress.env('wait_time') || 1000
}

export { URLS, PATHS, MSGS, DATA, WAIT, SELECTORS }