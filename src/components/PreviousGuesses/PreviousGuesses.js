import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function PreviousGuesses({ guesses, answer }) {
  const arr = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {arr.map((val, idx) => {
        // console.log(idx);
        return (
          <Guess
            key={idx}
            answer={answer}
            guess={guesses[idx]?.guess ?? undefined}
          />
        );
      })}
    </div>
  );
}

export default PreviousGuesses;
