import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import { connect } from "./database";
import "core-js/stable";
import "regenerator-runtime/runtime";
import cors from 'cors';

const PORT = process.env.PORT || 8000;
const app = express();
connect();

app.get('/', (req, res) => {
  res.json({
    api: 'Nabucodonosor API GraphQL',
    version: '1.0',
    status: 'working'
  })
});

app.use(cors());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: {
    messageId: 'test'
  }
}));

app.listen(PORT, () => console.log('Server on port ' + PORT));