import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTIONS } from "../../utils/queries";

export default function GameBoard() {
  const handleClick = () => {
    console.log("You clicked me!");
  };

  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  return (
    <div>
      {" "}
      {questions &&
        questions.map((question) => (
          <div
            onClick={handleClick}
            key={question._id}
            className="col-12 col-xl-2"
          >
            <div className="card mb-3">
              <h4 className="card-header bg-dark text-light p-2 m-0">
                {question.category} <br />
              </h4>
              <h4 className="card-header bg-dark text-light p-2 m-0">
                ${question.value} <br />
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}
