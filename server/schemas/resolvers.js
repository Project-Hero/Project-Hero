// BAD
// models> index, models> profile
// schemas> resolvers, schemas> typeDefs will all have to be changed
const { Question } = require('../models');


const resolvers = {
  Query: {
    questions: async () => {
      return await Question.find();
    },
    // question: async (parent, { questionId }) => {
    //   return await Question.findOne({ _id: questionId });
    // },
  },
};

module.exports = resolvers;
