import React, { useState } from 'react';
import GameBoard from '../GameBoard';

export default function Quickplay() {
    let [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(true);
        // display only if NOT isPlaying
    };

    return (
      <div>
        {isPlaying ? (
          <GameBoard />
        ) : (
          <div>
            <button className="btn btn-warning" onClick={handleClick}>Quick Play</button>
          </div>
        )}
      </div>
    );
}

