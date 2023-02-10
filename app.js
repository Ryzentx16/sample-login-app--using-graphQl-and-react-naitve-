import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//loading type definitions from schema file
import fs from "fs";
const typeDefs = fs.readFileSync("./schema.graphql", { encoding: "utf-8" });

// Resolvers define how to fetch the types defined in your schema.
import resolvers from "./resolvers.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

/*
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const db = require('./db');
const port = 9000;
const app = express();

//loading type definitions from schema file
const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})

//loading resolvers
const resolvers = require('./resolvers')

//binding schema and resolver
const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs, resolvers})

//enabling cross domain calls and form post
app.use(cors(), bodyParser.json());

//enabling routes
const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))

//registering port
app.listen(port, () => console.info(`Server started on port ${port}`));

*/
