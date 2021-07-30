const { buildSchema } = require("graphql");

exports.schema = buildSchema(`
  type Query {
    currentTime: String!
  }
`);
