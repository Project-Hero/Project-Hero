import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTIONS } from "../../utils/queries";

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
    console.log('event', event);
    console.log('event.key', event.key);
    if (event.key === "y") {
      console.log("The sky is your starting point!");
    } else if (event.key === "n") {
      console.log("The sky is your limit👀");
    }
  };
  return (
    <div tabIndex="0" onKeyDown={handleAnswer}>
      {questions &&
        questions.map((question, index) => (
          <div key={question._id}>
            <div onClick={(e) => handleBlanks(index)} className="col-12 col-xl">
              <div className="card mb-4">
                <h4 className="card-header bg-dark text-light p-2 m-0 center">
                  {question.category} <br />
                </h4>
                <h4 className="card-header bg-primary text-light p-2 m-0 center">
                  ${question.value} <br />
                </h4>
              </div>
            </div>
            <h4>{!hidden[index] && blanksLetters}</h4>
          </div>
        ))}
    </div>
  );
}
