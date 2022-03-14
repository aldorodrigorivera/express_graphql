const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers.config');

const port = 4000;
const app = express();



app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(port, () => 
    console.log(`🎮 Localhost:${port}/graphql`)
);