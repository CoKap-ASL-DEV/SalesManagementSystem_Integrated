const EntitySchema = require('typeorm').EntitySchema;

// `
// createdDate
// order
// purchaseOrderNumber
// issueDate
// exchangeRateCriteriaDate
// exchangeRate
// oerderQuantityMVersion
// oerderQuantitySVersion
// oerderQuantitySAVersion
// oerderQuantityMPackagen
// totalSellingPrice
// totalPurchasePrice
// technicalFeePaymentKepco
// technicalFeePaymentMmu
// patentDisposalCompensation
// netIncomePP
// netIncomeKepco
// `

module.exports = new EntitySchema({
    name: 'SaleCase',
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
        // 순번
        order: {
            type: 'numeric'
        },
        // BAUR 구매 주문서 번호
        purchaseOrderNumber: {
            type: 'numeric',
            nullable: true
        },
        // BAUR 구매 날짜
        issueDate: {
            type: 'numeric',
            nullable: true
        },
        // 적용환율 기준일
        exchangeRateCriteriaDate: {
            type: 'numeric'
        },
        // 적용환율 매매 기준율
        exchangeRate: {
            type: 'numeric'
        },
        // M-version 주문 수량
        oerderQuantityMVersion: {
            type: 'numeric'
        },
        // S-version 주문 수량
        oerderQuantitySVersion: {
            type: 'numeric'
        },
        // SA-version 주문 수량
        oerderQuantitySAVersion: {
            type: 'numeric'
        },
        // M package 주문 수량
        oerderQuantityMPackagen: {
            type: 'numeric'
        },
        // 총 판매가(달러)
        totalSellingPrice: {
            type: 'numeric'
        },
        // 총 구매가(달러)
        totalPurchasePrice: {
            type: 'numeric'
        },
        // 한전 기술료 납입금(원화)
        technicalFeePaymentKepco: {
            
            type: 'numeric'
        },
        // 목포해양대 기술료 납입금(원화)
        technicalFeePaymentMmu: {
            type: 'numeric'
        },
        // 특허처분보상금
        patentDisposalCompensation: {
            type: 'numeric'
        },
        // 파워플러스 순수익
        netIncomePP: {
            type: 'numeric'
        },
        // 한전 순수익
        netIncomeKepco: {
            type: 'numeric'
        }
    }
});