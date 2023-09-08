import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://dwheventhubprocessorapi-development.azurewebsites.net/api/graphql?',
  cache: new InMemoryCache(),
});

export default client;
