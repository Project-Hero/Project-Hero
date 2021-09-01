const db = require("./connection");
const { Question } = require("../models");

db.once('open', async () => {
    await Question.deleteMany();

    await Question.insertMany([
        {
            _id: "1",
            category: "Scott Quotes",
            phrase: "QUOTES AROUND THE KEYS",
            value: 200,
        },
    ]);

    console.log('questions seeded');


});

  // await Question.deleteMany();
