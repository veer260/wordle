import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [guesses, setGuesses] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  const arr = [0, 1, 2, 3, 4, 5];

  const addGuess = (label) => {
    const nextGuesses = [...guesses];
    nextGuesses.push({
      id: Math.random(),
      guess: label,
    });

    if (label.toUpperCase() == answer) {
      // console.log("won");
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      // console.log("sad");
      setGameStatus("lost");
    }

    setGuesses(nextGuesses);
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));

    setGuesses([]);

    setGameStatus("running");
  };

  const validatedGuesses = guesses.map(({ id, guess }) => {
    // console.log(guess);
    // console.log(checkGuess(guess, answer));
    return checkGuess(guess, answer);
  });

  // console.log(validatedGuesses);

  return (
    <>
      <PreviousGuesses answer={answer} guesses={guesses} />
      <GuessInput addGuess={addGuess} />
      {gameStatus == "won" && (
        <HappyBanner tries={guesses.length} action={handleRestart} />
      )}
      {gameStatus == "lost" && (
        <SadBanner answer={answer} action={handleRestart} />
      )}

      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
