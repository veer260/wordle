import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const charArr = range(5);
  const result = checkGuess(guess, answer);
  // console.log(result);
  // const styling = guess ? result[]

  return (
    <p className="guess">
      {charArr?.map((ch, idx) => {
        return (
          <span
            key={idx}
            className={"cell " + `${guess ? result[idx]?.status : ""}`}
          >
            {guess ? result[idx]?.letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
