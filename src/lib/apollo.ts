import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omq9zn0jeb01z44wpjafxk/master',
  cache: new InMemoryCache()
})