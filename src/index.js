import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'; //gql es el modulo que parsea todas las querys de manera legible
import { ApolloProvider, Query } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache()
});

ReactDOM.render(
    // el {client} es el const que creamos arriba, el cual tiene la conexion con el cliente 
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
