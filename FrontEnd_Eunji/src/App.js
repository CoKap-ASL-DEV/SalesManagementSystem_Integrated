import React from 'react';
import PageTemplate from './component/PageTemplate';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});


function App() {
    return(
      <div>
      <ApolloProvider client = { client }>
        <PageTemplate/>
      </ApolloProvider>
      </div>
    );
}

export default App;
