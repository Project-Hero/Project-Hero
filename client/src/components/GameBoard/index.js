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
  return <div>{props.blanksLetters.map(character => {
    if (character === "    ") {
      return <span>{character}&nbsp;&nbsp;</span>;
    } else {
      return <span>{character}</span>;
    }
  })}</div>;
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

    let blanksLetters = [];
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < phrase.length; i++) {
      if (phrase[i] === ' ') {
        blanksLetters.push("    ");
        console.log(phrase[i]);
      } else {
        blanksLetters.push("_  ");
      }
    }
    setBlankLetters(blanksLetters);
    // Converts blankLetters array into a string and renders it on the screen
  }, [phrase]);

  useEffect(() => {
  }, [blanksLetters]);

  const showKeys = (key) => {
    let alphabetCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (alphabetCharacters.includes(key) && !guessedKeys.includes(key)) {
      guessedKeys.push(key);
    } else {
      return
    }
  };

  const handleAnswer = (event) => {
    if (!hasWon) {
      setUpdatedAt(Date.now());
      let numBlanks = phrase.length;
      let key = event.key.toUpperCase();
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
        checkWin(phrase, blanksLetters);
      }
    }
  };

  const checkWin = (phrase, blanksLetters) => {
    // If the word equals the blankLetters array when converted to string, set isWin to true
    //phrase is an array
    if (
      phrase.join("").replaceAll(" ", "") ===
      blanksLetters.join("").replaceAll(" ", "")
    ) {
      // award points & disable card
      score = score + activeQuestion.value;
      setWon(true);
    } else {
    }
  };

  const scottQuoteQuestions = questions.filter(
    (question) => question.category === "Scott Quotes"
  );



    const classQuestions = questions.filter(
      (question) => question.category === "Class Quotes"
    );



    const grabBagQuestions = questions.filter(
      (question) => question.category === "Grab Bag"
    );



    const buzzWordQuestions = questions.filter(
      (question) => question.category === "Bootcamp Buzzwords"
    );



  return loading ? (
    <Spinner animation="border" variant="info" />
  ) : (
    <>
      <div className="d-f" tabIndex="0" onKeyDown={handleAnswer}>
        <div className="col-3 col-md">
          <h2 className="d-f jc-c category-style">Scott Quotes</h2>
          {scottQuoteQuestions.map((question, index) => (
            <Card
              key={question.id}
              question={question}
              handleBlanks={handleBlanks}
              index={index}
              hidden={hidden}
            />
          ))}
        </div>
        <div className="col-3 col-md">
          <h2 className="d-f jc-c category-style">Buzzwords</h2>
          {buzzWordQuestions.map((question, index) => (
            <Card
              key={question.id}
              question={question}
              handleBlanks={handleBlanks}
              index={index + 15}
              hidden={hidden}
            />
          ))}
        </div>
        <div className="col-3 col-md">
          <h2 className="d-f jc-c category-style">Class Quotes</h2>
          {classQuestions.map((question, index) => (
            <Card
              key={question.id}
              question={question}
              handleBlanks={handleBlanks}
              index={index + 5}
              hidden={hidden}
            />
          ))}
        </div>
        <div className="col-3 col-md">
          <h2 className="d-f jc-c category-style">Grab Bag</h2>
          {grabBagQuestions.map((question, index) => (
            <Card
              key={question.id}
              question={question}
              handleBlanks={handleBlanks}
              index={index + 10}
              hidden={hidden}
            />
          ))}
        </div>
      </div>
      <Test key={updatedAt} blanksLetters={blanksLetters} />
      <div>
        <PointCounter score={score} />
      </div>
      <div>
        <KeysPressed key={updatedAt} guessedKeys={guessedKeys} />
      </div>
    </>
  );
}
