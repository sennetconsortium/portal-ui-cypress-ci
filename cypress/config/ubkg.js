// https://docs.google.com/spreadsheets/d/1RMtWkvK6KSfLrBpKOXEKxYxNoOV1Mc6AB2OZPc2ZOhM/edit#gid=0
const UBKG = {
    endpoints: {
        default: 'valueset?parent_sab=SENNET&parent_code={code}&child_sabs=SENNET',
    },
    codes: [
        {
            code: 'C020076',
            name: 'specimen_categories',
            data: '[{"code":"C000008","sab":"SENNET","term":"Organ"},{"code":"C020079","sab":"SENNET","term":"Suspension"},{"code":"C020078","sab":"SENNET","term":"Section"},{"code":"C020077","sab":"SENNET","term":"Block"}]'
        },
        {
            code: 'C000008',
            name: 'organ_types',
            endpoint: 'organs?application_context=SENNET',
            data: '[{"code":"C030024","rui_code":"AD","sab":"SENNET","term":"Adipose Tissue"},{"code":"C030025","rui_code":"BD","sab":"SENNET","term":"Blood "},{"code":"C030026","rui_code":"BR","sab":"SENNET","term":"Brain"},{"code":"C030027","rui_code":"BS","sab":"SENNET","term":"Breast"},{"code":"C030029","rui_code":"LK","sab":"SENNET","term":"Kidney (Left)"},{"code":"C030030","rui_code":"RK","sab":"SENNET","term":"Kidney (Right)"},{"code":"C030031","rui_code":"LI","sab":"SENNET","term":"Large Intestine"},{"code":"C030032","rui_code":"LV","sab":"SENNET","term":"Liver "},{"code":"C030034","rui_code":"LL","sab":"SENNET","term":"Lung (Left)"},{"code":"C030035","rui_code":"RL","sab":"SENNET","term":"Lung (Right)"},{"code":"C030052","rui_code":"LN","sab":"SENNET","term":"Lymph Node"},{"code":"C030036","rui_code":"MU","sab":"SENNET","term":"Muscle"},{"code":"C030036","rui_code":"MU","sab":"SENNET","term":"Muscle"},{"code":"C030036","rui_code":"MU","sab":"SENNET","term":"Muscle"},{"code":"C030038","rui_code":"LO","sab":"SENNET","term":"Ovary (Left)"},{"code":"C030041","rui_code":"RO","sab":"SENNET","term":"Ovary (Right)"},{"code":"C030040","rui_code":"SK","sab":"SENNET","term":"Skin "}]'
        },
        {
            code: 'C000012',
            name: 'entities',
            data: '[{"code":"C050002","sab":"SENNET","term":"Dataset"},{"code":"C050003","sab":"SENNET","term":"Sample"},{"code":"C050004","sab":"SENNET","term":"Source"}]'
        },
        {
            code: 'C050020',
            name: 'source_types',
            data: '[{"code":"C050007","sab":"SENNET","term":"Mouse"},{"code":"C050006","sab":"SENNET","term":"Human"},{"code":"C050009","sab":"SENNET","term":"Human Organoid"},{"code":"C050010","sab":"SENNET","term":"Mouse Organoid"}]'
        },
        {
            code: 'C004000',
            name: 'data_assays',
            endpoint: 'datasets?application_context=SENNET',
            data: '[{"alt-names":[],"contains-pii":true,"data_type":"bulk-RNA","dataset_provider":"SenNet IEC","description":"Bulk RNA-seq","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"CITE-Seq","dataset_provider":"","description":"CITE-Seq","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"CODEX","dataset_provider":"SenNet IEC","description":"CODEX","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"codex_cytokit","dataset_provider":"SenNet IEC","description":"CODEX [Cytokit + SPRM]","primary":false,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"codex_cytokit_v1","dataset_provider":"SenNet IEC","description":"CODEX [Cytokit + SPRM]","primary":false,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"CosMX (RNA)","dataset_provider":"SenNet IEC","description":"CosMX (RNA)","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"DBiT-seq","dataset_provider":"SenNet IEC","description":"DBiT-seq","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"FACS - Fluorescence-activated Cell Sorting","dataset_provider":"SenNet IEC","description":"FACS - Fluorescence-activated Cell Sorting","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"GeoMX (RNA) ","dataset_provider":"SenNet IEC","description":"GeoMX (RNA) ","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":["Image Pyramid"],"contains-pii":false,"data_type":"image_pyramid","dataset_provider":"SenNet IEC","description":"image pyramid","primary":false,"vis-only":true,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"LC-MS","dataset_provider":"SenNet IEC","description":"LC-MS","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":["Light Sheet"],"contains-pii":false,"data_type":"Lightsheet","dataset_provider":"SenNet IEC","description":"Lightsheet Microscopy","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"Mint-ChIP","dataset_provider":"SenNet IEC","description":"Mint-ChIP","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"salmon_rnaseq_bulk","dataset_provider":"SenNet IEC","description":"Bulk RNA-seq [Salmon]","primary":false,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"SASP","dataset_provider":"","description":"SASP","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":true,"data_type":"scRNA-seq","dataset_provider":"SenNet IEC","description":"scRNA-seq","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":["sn_atac_seq_multiome_10x"],"contains-pii":false,"data_type":"sn_atac_seq","dataset_provider":"SenNet IEC","description":"snATAC-seq [SnapATAC]","primary":false,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":true,"data_type":"snATAC-seq","dataset_provider":"SenNet IEC","description":"snATAC-seq","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":true,"data_type":"snRNA-seq","dataset_provider":"SenNet IEC","description":"snRNA-seq","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"Stained Slides","dataset_provider":"","description":"H&E Slide Staining","primary":true,"vis-only":false,"vitessce-hints":[]},{"alt-names":[],"contains-pii":false,"data_type":"Visium","dataset_provider":"SenNet IEC","description":"Visium","primary":true,"vis-only":false,"vitessce-hints":[]}]'
        }
    ]
}

export { UBKG }