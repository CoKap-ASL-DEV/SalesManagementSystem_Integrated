import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import FormStore from "./stores/forminputs";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:3000/graphql"
});

export const client = new ApolloClient({
  cache,
  link,
  connectToDevTools: true
});

const fstore = new FormStore();

//Could not find "client" in the context or passed in as an option.
// Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options
//==> apollo라이브러리 업데이트로 해결
//=> 이거 해결후 바벨 관련 에러남 -> @babel/runtime 설치하고 나서 해결

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider fstore={fstore}>      
        <App />      
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
