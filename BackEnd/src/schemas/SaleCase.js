const { getRepository } = require('typeorm');
const SaleCase = require('../entities/SaleCase');

const saleCaseArguments = [
    'createdDate',
    'order',
    'purchaseOrderNumber',
    'issueDate',
    'exchangeRateCriteriaDate',
    'exchangeRate',
    'oerderQuantityMVersion',
    'oerderQuantitySVersion',
    'oerderQuantitySAVersion',
    'oerderQuantityMPackagen',
    'totalSellingPrice',
    'totalPurchasePrice',
    'technicalFeePaymentKepco',
    'technicalFeePaymentMmu',
    'patentDisposalCompensation',
    'netIncomePP',
    'netIncomeKepco'
];
// TODO: what is not null and what is nullable
const schemaObject = {
    typedef: `
        type SaleCase {
            id: ID!
            ${saleCaseArguments.map(d => d + ': Float').join('\n')}
        }
        type Query {
            saleCases: [SaleCase]
            saleCase(id: ID!): SaleCase!
        }
        type Mutation {
            addSaleCase(
                ${saleCaseArguments.map(d => d + ': Float').join('\n')}
            ): SaleCase
            editSaleCase(
                id: ID!
                ${saleCaseArguments.map(d => d + ': Float').join('\n')}
            ): SaleCase
            deleteSaleCase(id: ID!): Boolean
        }
    `,
    resolvers: {
        Query: {
            saleCases: () => {
                return getRepository(SaleCase).find();
            },
            saleCase: (_, { id }) => {
                return getRepository(SaleCase).findOne(id);
            }
        },
        Mutation: {
            addSaleCase: (_, {
                ...saleCaseArguments
            }) => {
                const saleCase = Object.assign({
                    ...saleCaseArguments
                }, SaleCase);

                return getRepository(SaleCase).save(saleCase);
            },
            editSaleCase: async (_, { id, ...saleCaseArguments }) => {
                const entry = await getRepository(SaleCase).findOne({ id });

                const editedEntry = Object.assign(entry, { ...saleCaseArguments });

                await getRepository(SaleCase).save(editedEntry);
            },
            deleteSaleCase: async (_, { id }) => {
                try {
                    const entry = await getRepository(SaleCase).findOne({ id });

                    await getRepository(SaleCase).remove(entry);

                    return true;
                } catch (err) {
                    console.log(err);
                    return false;
                }
            }
        }
    }
};

module.exports = schemaObject;