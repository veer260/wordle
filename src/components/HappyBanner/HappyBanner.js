import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ tries, action }) {
  return (
    <Banner action={action} actionText="Restart Game" status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {tries} guesses</strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
