import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useToggleState } from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  const [isFaceUp, ToggleCard] = useToggleState(true);

  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={isFaceUp ? front : back}
      alt="playing card"
      onClick={ToggleCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
