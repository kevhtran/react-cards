import React, { useState } from "react";
import "./PokemonCard.css";
import { useToggleState } from "./hooks";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {

  const [isFaceUp, ToggleCard] = useToggleState(true);

  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };



  return (
    <div onClick={ToggleCard} className="PokemonCard Card">
      {isFaceUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
