const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Question {
    _id: String
    category: String
    phrase: String
    value: Int
  }

  type Query {
    questions: [Question]
  }
`;

module.exports = typeDefs;
