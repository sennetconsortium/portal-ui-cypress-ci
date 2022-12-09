const MSGS = {
    name: 'Portal-UI',
    search: 'Search',
    entity: 'Entity',
    create: 'Create',
    edit: 'Edit',
    provenance: 'Provenance-UI'
}

const SELECTORS = {
    search: '.input-group #search',
    table: '.table-responsive tr'
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
        uuid: 'b5874d153e668d110a562c933671fdac',
        sennetId: 'SNT496.QLMR.225'
    },
    sample: {
        uuid: '75416aad581009b8f316a3d034a2bda0',
        sennetId: 'SNT333.VBRT.956'
    },
    dataset: {
        uuid: '3ee6a090038e39af0dd536771d44caf8',
        sennetId: 'SNT546.DPNT.455'
    }
}

const WAIT = {
    time: Cypress.env('wait_time') || 1000
}

export { URLS, PATHS, MSGS, DATA, WAIT, SELECTORS }