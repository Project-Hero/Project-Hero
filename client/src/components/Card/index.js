import React from 'react';


export default function Card({question, handleBlanks, index, hidden}) {
    return (
      <div key={question._id}>
        <div onClick={(e) => handleBlanks(index)}>
          <div className="card mb-4">
            <h4 className="card-header bg-primary text-light p-2 m-0 center">
              ${question.value} <br />
            </h4>
          </div>
        </div>
        <h4>{!hidden[index]}</h4>
      </div>
    );
};