import { onError } from '@apollo/client/link/error';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';

const errorLink = onError((errorResponse) => {
  if (errorResponse.networkError) {
    // eslint-disable-next-line no-console
    console.error(errorResponse.networkError.message);
  }

  if (errorResponse.graphQLErrors) {
    errorResponse.graphQLErrors.forEach(error => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: import.meta.env.VITE_API_BASE_URL }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
