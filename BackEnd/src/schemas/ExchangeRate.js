const { getRepository } = require('typeorm');
const ExchangeRate = require('../entities/ExchangeRate');

const exchangeRateArguments = [
    'createdDate',
    'exchangeRate',
];

const schemaObject = {
    typedef: `
        type ExchangeRate {
            id: ID!
            ${exchangeRateArguments.map(d => d + ': Float!').join('\n')}
        }
        type Query {
            exchangeRates: [ExchangeRate]
            latestExchangeRate: ExchangeRate!
        }
        type Mutation {
            addExchangeRate(
                ${exchangeRateArguments.map(d => d + ': Float!').join('\n')}
            ): ExchangeRate
        }
    `,
    resolvers: {
        Query: {
            exchangeRates: () => {
                return getRepository(ExchangeRate).find();
            },
            latestExchangeRate: (_, { id }) => {
                return getRepository(ExchangeRate).findOne(id);
            }
        },
        Mutation: {
            addExchangeRate: (_, {
                ...exchangeRateArguments
            }) => {
                const exchangeRate = Object.assign({
                    ...exchangeRateArguments
                }, ExchangeRate);

                return getRepository(ExchangeRate).save(exchangeRate);
            }
        }
    }
};

module.exports = schemaObject;