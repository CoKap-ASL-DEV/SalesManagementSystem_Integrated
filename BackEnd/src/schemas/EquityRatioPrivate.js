const { getRepository } = require('typeorm');
const EquityRatioPrivate = require('../entities/EquityRatioPrivate');

const equityRatioPrivateArguments = [
    'createdDate',
    'dsk',
    'smkim',
    'ssj',
    'bsk'
];

const schemaObject = {
    typedef: `
        type EquityRatioPrivate {
            id: ID!
            ${equityRatioPrivateArguments.map(d => d + ': Float!').join('\n')}
        }
        type Query {
            equityRatioPrivates: [EquityRatioPrivate]
            latestEquityRatioPrivate: EquityRatioPrivate!
        }
        type Mutation {
            addEquityRatioPrivate(
                ${equityRatioPrivateArguments.map(d => d + ': Float!').join('\n')}
            ): EquityRatioPrivate
        }
    `,
    resolvers: {
        Query: {
            equityRatioPrivates: () => {
                return getRepository(EquityRatioPrivate).find();
            },
            latestEquityRatioPrivate: (_, { id }) => {
                return getRepository(EquityRatioPrivate).findOne(id);
            }
        },
        Mutation: {
            addEquityRatioPrivate: (_, {
                ...equityRatioPrivateArguments
            }) => {
                const equityRatioPrivate = Object.assign({
                    ...equityRatioPrivateArguments
                }, EquityRatioPrivate);

                return getRepository(EquityRatioPrivate).save(equityRatioPrivate);
            }
        }
    }
};

module.exports = schemaObject;