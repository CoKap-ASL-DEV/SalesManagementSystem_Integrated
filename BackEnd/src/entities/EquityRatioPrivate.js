const EntitySchema = require('typeorm').EntitySchema;

// `
// createdDate
// dsk
// smkim
// ssj
// bsk
// `

module.exports = new EntitySchema({
    name: 'EquityRatioPrivate',
    columns: {
        id: {
            primary: true,
            type: 'integer',
            generated: true
        },
        // 생성 시각(timestamp)
        createdDate: {
            type: 'numeric'
        },
        // DSK
        dsk: {
            type: 'numeric'
        },
        // SMKIM
        smkim: {
            type: 'numeric'
        },
        // SSJ
        ssj: {
            type: 'numeric'
        },
        // BSK
        bsk: {
            type: 'numeric'
        },
    }
});