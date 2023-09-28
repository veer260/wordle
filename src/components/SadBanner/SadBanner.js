import React from "react";
import Banner from "../Banner/Banner";

function SadBanner({ answer, action }) {
  return (
    <Banner action={action} actionText={"Restart Game"} status={"sad"}>
      <p>
        Sorry, The correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default SadBanner;
