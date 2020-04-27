import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import 'mobx-react-lite/batchingForReactDom';

import RootStore from 'stores/root';

import 'react-datepicker/dist/react-datepicker.css';
import 'c3/c3.css';

import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:2000/graphql',
});

export const client = new ApolloClient({
  cache,
  link,
  connectToDevTools: true,
});

const root = new RootStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider {...root}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);
