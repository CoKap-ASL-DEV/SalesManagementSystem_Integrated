const { getRepository } = require('typeorm');
const EquityRatio = require('../entities/EquityRatio');

const equityRatioArguments = [
    'createdDate',
    'purchaseRatio',
    'technicalRatio',
    'kepcoRatio',
    'mokpoRatio',
    'compensationRatio'
];

const schemaObject = {
    typedef: `
        type EquityRatio {
            id: ID!
            ${equityRatioArguments.map(d => d + ': Float!').join('\n')}
        }
        type Query {
            equityRatios: [EquityRatio]
            latestEquityRatio: EquityRatio!
        }
        type Mutation {
            addEquityRatio(
                ${equityRatioArguments.map(d => d + ': Float!').join('\n')}
            ): EquityRatio
        }
    `,
    resolvers: {
        Query: {
            equityRatios: () => {
                return getRepository(EquityRatio).find();
            },
            latestEquityRatio: (_, { id }) => {
                return getRepository(EquityRatio).findOne(id);
            }
        },
        Mutation: {
            addEquityRatio: (_, {
                ...equityRatioArguments
            }) => {
                const equityRatio = Object.assign({
                    ...equityRatioArguments
                }, EquityRatio);

                return getRepository(EquityRatio).save(equityRatio);
            }
        }
    }
};

module.exports = schemaObject;