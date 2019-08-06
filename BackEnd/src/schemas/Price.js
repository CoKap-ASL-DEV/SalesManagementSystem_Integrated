const { getRepository } = require('typeorm');
const Price = require('../entities/Price');

const priceArguments = [
    'createdDate',
    'priceMVer',
    'priceSVer',
    'priceSAVer',
    'priceMPackage'
];

const schemaObject = {
    typedef: `
        type Price {
            id: ID!
            ${priceArguments.map(d => d + ': Float!').join('\n')}
        }
        type Query {
            prices: [Price]
            latestPrice: Price!
        }
        type Mutation {
            addPrice(
                ${priceArguments.map(d => d + ': Float!').join('\n')}
            ): Price
        }
    `,
    resolvers: {
        Query: {
            prices: () => {
                return getRepository(Price).find();
            },
            latestPrice: (_, { id }) => {
                return getRepository(Price).findOne(id);
            }
        },
        Mutation: {
            addPrice: (_, {
                ...priceArguments
            }) => {
                const price = Object.assign({
                    ...priceArguments
                }, Price);

                return getRepository(Price).save(price);
            }
        }
    }
};

module.exports = schemaObject;