import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    text: String
    film: String
    allFilms: String
  }
`;

const sever = new ApolloServer({ typeDefs });

sever.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
