import React from "react";

const KeysRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function setLettersWithStatus(validatedGuesses) {
  const obj = {};

  validatedGuesses.forEach((words) => {
    words.forEach(({ letter, status }) => {
      obj[letter] = status;
    });
  });

  return obj;
}

function Keyboard({ validatedGuesses }) {
  console.log(validatedGuesses);
  const obj = setLettersWithStatus(validatedGuesses);

  console.log(obj);
  return (
    <div className="keyboard">
      {KeysRows.map((row) => {
        return (
          <div className="keyboard-row">
            {row.map((key) => {
              // console.log(`!+ ${obj[key]}`);
              return <div className={`letter ${obj[key]}`}>{key}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
