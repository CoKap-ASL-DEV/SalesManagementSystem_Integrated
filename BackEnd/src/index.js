const { ApolloServer } = require('apollo-server');
const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const { createConnection } = require('typeorm');
// const { merge } = require('lodash');

const equityRatioSchema = require('./schemas/EquityRatio');
const equityRatioPrivateSchema = require('./schemas/EquityRatioPrivate');
const exchangeRateSchema = require('./schemas/ExchangeRate');
const priceSchema = require('./schemas/Price');
const saleCaseSchema = require('./schemas/SaleCase');

const typeDefs = mergeTypes([
    equityRatioSchema.typedef,
    equityRatioPrivateSchema.typedef,
    exchangeRateSchema.typedef,
    priceSchema.typedef,
    saleCaseSchema.typedef
], { all: true });

const resolvers = mergeResolvers([   
    equityRatioSchema.resolvers,
    equityRatioPrivateSchema.resolvers,
    exchangeRateSchema.resolvers,
    priceSchema.resolvers,
    saleCaseSchema.resolvers
]);

const server = new ApolloServer({
    typeDefs, resolvers
});

createConnection({
    'type': 'postgres',
    'host': 'john.db.elephantsql.com',
    'port': 5432,
    'username': 'acofjdzg',
    'password': 'RpkWuUX_ahpQ6s7XMj0atKaPMFdb5ed_',
    'database': 'acofjdzg',
    'synchronize': true,
    'logging': false,
    'entities': [
        require('./entities/EquityRatio'),
        require('./entities/EquityRatioPrivate'),
        require('./entities/ExchangeRate'),
        require('./entities/Price'),
        require('./entities/SaleCase')
    ]
}).then((/*res*/) => {
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}).catch((err) => {
    console.log('Could nott connect to the database', err);
});