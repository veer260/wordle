import React from "react";

function GuessInput({ addGuess }) {
  const [guessInput, setGuessInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addGuess(guessInput);

    // console.log({ guessInput });

    setGuessInput("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter input: </label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        title="5 letter word"
        value={guessInput}
        onChange={(e) => setGuessInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
