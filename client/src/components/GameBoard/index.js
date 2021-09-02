import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTIONS } from "../../utils/queries";

export default function GameBoard() {

  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  const handleAnswer = () => {
    console.log(data);
  }
  return (
    <div className="d-f">
      {" "}
      {questions &&
        questions.map((question) => (
          <div
            onClick={handleAnswer}
            key={question._id}
            className="col-12 col-xl"
          >
            <div className="card mb-3">
              <h4 className="card-header bg-dark text-light p-2 m-0 center">
                {question.category} <br />
              </h4>
              <h4 className="card-header bg-primary text-light p-2 m-0 center">
                ${question.value} <br />
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}
