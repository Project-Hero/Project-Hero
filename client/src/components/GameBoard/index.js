import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTIONS } from "../../utils/queries";

export default function GameBoard() {
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  return (
    <div>
      {" "}
      Pick a letter
      {questions &&
        questions.map((question) => (
          <div key={question._id} className="col-12 col-xl-6">
            <div className="card mb-3">
              <h4 className="card-header bg-dark text-light p-2 m-0">
                {question.phrase} <br />
               </h4>
             </div>
          </div>
        ))}
    </div>
  );
}
