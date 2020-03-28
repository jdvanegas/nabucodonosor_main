import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
  scalar DateTime

  type Query {
    Movements: [Movement]
  }

  type Movement {
    _id: ID
    type: String
    status: String
    created: DateTime
    updated: DateTime
  }

  type Cart {
    _id: ID
    code: String
    switchedOn: Boolean
    lastOn: DateTime
    lastOff: DateTime
  }

  type Mutation {
    switchCart : Cart
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})
