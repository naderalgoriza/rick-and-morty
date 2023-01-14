import { ApolloClient, InMemoryCache, from, ApolloLink, HttpLink } from '@apollo/client';
import { loaderActions } from '../redux/slices/loaderSlice';
import store from '../redux/store';

const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' });

const requestInterceptor = new ApolloLink((operation, forward) => {
  // add the recent-activity custom header to the headers
  store.dispatch(loaderActions.incrementLoader());

  return forward(operation);
})

const responseInterceptor = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    console.log('response', response)
    const state = store.getState();
    if (state.loader.count > 0) {
      store.dispatch(loaderActions.decrementLoader());
    }
    return response;
  });
});

export const apolloClient = new ApolloClient({
  // uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
  link: from([requestInterceptor, responseInterceptor, httpLink])
});
