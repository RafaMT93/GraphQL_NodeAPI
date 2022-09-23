const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require('fs');

const typeDefs = gql(readFileSync('./src/schema.graphql', { encoding: 'utf-8' }));
const resolvers = require('./resolvers');
const MoviesAPI = require('./datasources/movie-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        moviesAPI: new MoviesAPI(),
      }
    }
});

server.listen().then(() => {
    console.log(`
        🚀  Server is running! http://localhost:4000
    `);
});