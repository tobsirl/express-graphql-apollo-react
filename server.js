const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow cross origin
app.use(cors());

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
