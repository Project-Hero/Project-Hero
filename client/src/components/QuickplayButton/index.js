import React, { useState } from 'react';

export default function Quickplay() {
    let [question, showQuestion] = useState();

    const handleClick = () => {
        console.log("You clicked quickplay!")
    };

    return (
        <button onClick={handleClick}>Quick Play</button>
    )

}