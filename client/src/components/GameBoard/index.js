import React, { useState } from "react";
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

    let numBlanks = phrase.length;
    let blanksLetters = [];
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
      blanksLetters.push("_  ");
    }
    setBlankLetters(blanksLetters);
    // Converts blankLetters array into a string and renders it on the screen
    console.log(blanksLetters);
    console.log(phrase);
    setHidden({ ...hidden, [index]: !hidden[index] });
  };
  const handleAnswer = (event) => {
    if (event.key === "y") {
      console.log("The sky is your starting point!");
    } else if (event.key === "n") {
      console.log("The sky is your limit👀");
    }
  };
  return (
    <div className="d-f" onKeyPress={(e) => handleAnswer}>
      {" "}
      {questions &&
        questions.map((question, index) => (
          <div
            onClick={(e) => handleBlanks(index)}
            key={question._id}
            className="col-12 col-xl"
          >
            <div className="card mb-4">
              <h4 className="card-header bg-dark text-light p-2 m-0 center">
                {question.category} <br />
              </h4>
              <h4 className="card-header bg-primary text-light p-2 m-0 center">
                ${question.value} <br />
              </h4>
            </div>
            <h4>{!hidden[index] && blanksLetters}</h4>
          </div>
        ))}
    </div>
  );
}
