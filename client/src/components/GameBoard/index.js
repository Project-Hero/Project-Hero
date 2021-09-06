import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTIONS } from "../../utils/queries";

import Card from './../Card';

export default function GameBoard() {
  const [phrase, setPhrase] = useState([]);
  const [blanksLetters, setBlankLetters] = useState([]);
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  const [hidden, setHidden] = useState({});
  const handleBlanks = (index) => {
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
  }, [phrase])



  const handleAnswer = (event) => {
    console.log('event.key', event.key);
    
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div tabIndex="0" onKeyDown={handleAnswer}>
      {questions &&
        questions.map((question, index) => (
          <Card
            question={question}
            blanksLetters={blanksLetters}
            handleBlanks={handleBlanks}
            index={index}
            hidden={hidden}
          />
        ))}
      <h4>{blanksLetters}</h4>
    </div>
  );
}
