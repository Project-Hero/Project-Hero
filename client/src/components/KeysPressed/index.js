import React from "react";

export default function KeysPressed({ guessedKeys }) {
  return (
    <div>
      <h4 className="d-f p-10px">Guessed letters: {guessedKeys}</h4>
    </div>
  );
}
