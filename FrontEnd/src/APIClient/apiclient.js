import React from "react";
import { gql } from "apollo-boost";
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, Query } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:3000/graphql'
  })

const client = new ApolloClient({
  cache,
  link,
  connectToDevTools: true
});

const getExchangeRates = gql`
query{
    exchangeRates{
      exchangeRate
    }
  }
`;
const ApiClient = () => (
  <ApolloProvider client={client}>    
    <Query query={getExchangeRates}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.exchangeRates.map(({exchangeRate}) => (
        <div>
          <p>{exchangeRate}</p>
        </div>
      ));
          
      }}
    </Query>
    
  </ApolloProvider>
);

export default ApiClient;
