import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Spinner from 'react-bootstrap/Spinner';

import Card from './../Card';
import { QUERY_QUESTIONS } from "../../utils/queries";
import PointCounter from "./../PointCounter";
import KeysPressed from "./../KeysPressed";

let score = 0;
let guessedKeys = [];
let activeQuestion = {};

function Test(props) {
  return <div>{props.blanksLetters}</div>;
}

export default function GameBoard() {
  const [hasWon, setWon] = useState(false);
  const [phrase, setPhrase] = useState([]);
  const [blanksLetters, setBlankLetters] = useState([]);
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  const [hidden, setHidden] = useState({});
  const [updatedAt, setUpdatedAt] = useState(Date.now());


  const handleBlanks = (index) => {
    setWon(false);
    guessedKeys = [];
    activeQuestion = questions[index];
    setPhrase(questions[index].phrase.split(""));
    setHidden({ ...hidden, [index]: !hidden[index] });
  };

  useEffect(() => {
    let numBlanks = phrase.length;
    let blanksLetters = [];
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
      blanksLetters.push("_  ");
    }
    setBlankLetters(blanksLetters);
    // Converts blankLetters array into a string and renders it on the screen
    console.log(blanksLetters);
  }, [phrase]);

  useEffect(() => {
    console.log("second useeffect");
  }, [blanksLetters]);

  const showKeys = (key) => {
    let alphabetCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (alphabetCharacters.includes(key) && !guessedKeys.includes(key)) {
      guessedKeys.push(key);
      console.log(guessedKeys);
    } else {
      return
    }
  };


  const handleAnswer = (event) => {
    if (!hasWon) {
      setUpdatedAt(Date.now());
      let numBlanks = phrase.length;
      let key = event.key.toUpperCase();
      console.log("key", key);
      showKeys(key);
      let letterInWord = false;
      for (let i = 0; i < numBlanks; i++) {
        if (phrase[i] === key) {
          letterInWord = true;
        }
      }
      if (letterInWord) {
        for (let j = 0; j < numBlanks; j++) {
          if (phrase[j] === key) {
            blanksLetters[j] = key;
          }
        }
        setBlankLetters(blanksLetters);
        console.log(phrase);
        console.log(blanksLetters);
        checkWin(phrase, blanksLetters);
      }
    }
  };

  const checkWin = (phrase, blanksLetters) => {
    // If the word equals the blankLetters array when converted to string, set isWin to true
    //phrase is an array
    if (phrase.join("") === blanksLetters.join("")) {
      console.log("you've won!");
      // award points & disable card
      score = score + activeQuestion.value;
      setWon(true);


    } else {
      console.log("keep trying");
    }
  };

  return loading ? (
    <Spinner animation="border" variant="info" />
  ) : (
    <div tabIndex="0" onKeyDown={handleAnswer}>
      {questions &&
        questions.map((question, index) => (
          <Card
            question={question}
            handleBlanks={handleBlanks}
            index={index}
            hidden={hidden}
          />
        ))}
      <Test key={updatedAt} blanksLetters={blanksLetters} />
      <div>
        <PointCounter score={score} />
      </div>
      <div>
        <KeysPressed key={updatedAt} guessedKeys={guessedKeys} />
      </div>
    </div>
  );
}
