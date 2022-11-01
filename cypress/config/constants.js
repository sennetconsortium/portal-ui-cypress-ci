const MSGS = {
    name: 'Portal-UI',
    search: 'Search',
    entity: 'Entity',
    create: 'Create',
    edit: 'Edit'
}

const URLS = {
    domain: Cypress.env('domain') || 'https://data.dev.sennetconsortium.org/'
}

const PATHS = {
    search: `${URLS.domain}search`,
    edit: `${URLS.domain}edit`
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
        uuid: 'b7f283e49584f14a2b30abcedd712ef7',
        sennetId: 'SNT685.CDGR.672'
    }
}

const WAIT = {
    time: Cypress.env('wait_time') || 1000
}

export { URLS, PATHS, MSGS, DATA, WAIT }