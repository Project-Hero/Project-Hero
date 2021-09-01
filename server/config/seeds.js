const db = require("./connection");
const { Question } = require("../models");

db.once('open', async () => {
    await Question.deleteMany();

    await Question.insertMany([
        {
            _id: "1",
            category: "Test Category",
            phrase: ["t", "e", "s", "t"],
            value: 200,
        },
    ]);

    console.log('questions seeded');

    await Question.deleteMany();
});
