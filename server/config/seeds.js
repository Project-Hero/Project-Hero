const db = require("./connection");
const { Question } = require("../models");

db.once('open', async () => {
    await Question.deleteMany();

    await Question.insertMany([
      {
        _id: "1",
        category: "Scott Quotes",
        phrase: "SHARE YOUR SCREEN",
        value: 200,
      },
      {
        _id: "2",
        category: "Scott Quotes",
        phrase: "QUOTES AROUND THE KEYS",
        value: 400,
      },
      {
        _id: "3",
        category: "Scott Quotes",
        phrase: "KEY VALUE",
        value: 600,
      },
      {
        _id: "4",
        category: "Scott Quotes",
        phrase: "LAST SPIN OF THE NIGHT",
        value: 800,
      },
      {
        _id: "5",
        category: "Scott Quotes",
        phrase: "WHOSE DOG IS THAT",
        value: 1000,
      },
      {
        _id: "6",
        category: "Class Quotes",
        phrase: "MOTHERSHIP",
        value: 200,
      },
      {
        _id: "7",
        category: "Class Quotes",
        phrase: "HOT PINK",
        value: 400,
      },
      {
        _id: "8",
        category: "Class Quotes",
        phrase: "BOOYAH",
        value: 600,
      },
      {
        _id: "9",
        category: "Class Quotes",
        phrase: "DORK CODE",
        value: 800,
      },
      {
        _id: "10",
        category: "Class Quotes",
        phrase: "TRAVERSE THE DOM",
        value: 1000,
      },
      {
        _id: "11",
        category: "Grab Bag",
        phrase: "BRICKWIG",
        value: 200,
      },
      {
        _id: "12",
        category: "Grab Bag",
        phrase: "HUZZAH",
        value: 400,
      },
      {
        _id: "13",
        category: "Grab Bag",
        phrase: "MAC OR PC",
        value: 600,
      },
      {
        _id: "14",
        category: "Grab Bag",
        phrase: "MONGODB",
        value: 800,
      },
      {
        _id: "15",
        category: "Grab Bag",
        phrase: "FULL STACK",
        value: 1000,
      },
      {
        _id: "16",
        category: "Bootcamp Buzzwords",
        phrase: "CURLIES",
        value: 200,
      },
      {
        _id: "17",
        category: "Bootcamp Buzzwords",
        phrase: "MUSTACHE",
        value: 400,
      },
      {
        _id: "18",
        category: "Bootcamp Buzzwords",
        phrase: "BANANAS",
        value: 600,
      },
      {
        _id: "19",
        category: "Bootcamp Buzzwords",
        phrase: "BOX TOPS",
        value: 800,
      },
      {
        _id: "20",
        category: "Bootcamp Buzzwords",
        phrase: "DAVID BLAINE",
        value: 1000,
      },
    ]);

    console.log('questions seeded');


});

  // await Question.deleteMany();
