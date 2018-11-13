const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
require('dotenv').config();

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
