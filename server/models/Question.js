const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  _id: {
    type: String,
  },
  category: {
    type: String,
  },
  phrase: {
    type: String,
  },
  value: {
    type: Number,
  },
  img: {
    type: String,
  },
  hint: {
    type: String,
  },
});

const Question = model("Question", questionSchema);

module.exports = Question;
