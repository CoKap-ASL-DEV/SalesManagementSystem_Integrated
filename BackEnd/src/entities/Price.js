const EntitySchema = require('typeorm').EntitySchema;

// `
// createdDate
// priceMVer
// priceSVer
// priceSAVer
// priceMPackage
// `

module.exports = new EntitySchema({
    name: 'Price',
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
        // M-ver. price
        priceMVer: {
            type: 'numeric'
        },
        // S-ver. price
        priceSVer: {
            type: 'numeric'
        },
        // SA-ver. price
        priceSAVer: {
            type: 'numeric'
        },
        // M Package price
        priceMPackage: {
            type: 'numeric'
        },
    }
});