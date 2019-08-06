const EntitySchema = require('typeorm').EntitySchema;

// `
// createdDate
// purchaseRatio
// technicalRatio
// kepcoRatio
// mokpoRatio
// compensationRatio
// `

module.exports = new EntitySchema({
    name: 'EquityRatio',
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
        // 구매가 비율
        purchaseRatio: {
            type: 'numeric'
        },
        // 기술요율
        technicalRatio: {
            type: 'numeric'
        },
        // 한전지분율
        kepcoRatio: {
            type: 'numeric'
        },
        // 목포지분율
        mokpoRatio: {
            type: 'numeric'
        },
        // 보상요율
        compensationRatio: {
            type: 'numeric'
        }
    }
});