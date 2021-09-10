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
        phrase: "QUOTESAROUNDTHEKEYS",
        value: 400,
      },
      {
        _id: "3",
        category: "Scott Quotes",
        phrase: "KEYVALUE",
        value: 600,
      },
      {
        _id: "4",
        category: "Scott Quotes",
        phrase: "LASTSPINOFTHENIGHT",
        value: 800,
      },
      {
        _id: "5",
        category: "Scott Quotes",
        phrase: "WHOSEDOGISTHAT",
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
        phrase: "HOTPINK",
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
        phrase: "DORKCODE",
        value: 800,
      },
      {
        _id: "10",
        category: "Class Quotes",
        phrase: "TRAVERSETHEDOM",
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
        phrase: "MACVSPC",
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
        phrase: "FULLSTACK",
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
        phrase: "BOXTOPS",
        value: 800,
      },
      {
        _id: "20",
        category: "Bootcamp Buzzwords",
        phrase: "DAVIDBLAINE",
        value: 1000,
      },
    ]);

});


