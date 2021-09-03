import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTIONS } from "../../utils/queries";

export default function GameBoard() {

  const [phrase, setPhrase] = useState([])


  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  const [hidden, setHidden] = useState({})
  const handleAnswer = (index) => {
    setPhrase(questions[index].phrase.split(""));
    console.log(phrase);
    setHidden({ ...hidden, [index]: !hidden[index] });

  }
  return (
    <div className="d-f">
      {" "}
      {questions &&
        questions.map((question, index) => (
          <div
            onClick={(e) => handleAnswer(index)}
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
            <h4>{!hidden[index] && phrase}</h4>
          </div>
        ))}
    </div>
  );
}
