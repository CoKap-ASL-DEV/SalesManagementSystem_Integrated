const EntitySchema = require('typeorm').EntitySchema;

// `
// createdDate
// exchangeRate
// `

module.exports = new EntitySchema({
    name: 'ExchangeRate',
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
        // 환율
        exchangeRate: {
            type: 'numeric'
        }
    }
});