const db = require("./connection");
const { Question } = require("../models");

db.once('open', async () => {
    await Question.deleteMany();

    await Question.insertMany([
      {
        _id: "1",
        category: "Scott Quotes",
        phrase: "QUOTESAROUNDTHEKEYSsssss",
        value: 200,
      },
      {
        _id: "2",
        category: "Scott Quotes",
        phrase: "LASTSPINOFTHENIGHT",
        value: 400,
      },
    ]);

    console.log('questions seeded');


});

  // await Question.deleteMany();
