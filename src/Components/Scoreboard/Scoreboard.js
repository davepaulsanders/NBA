import React from "react";
import "./Scoreboard.css";
import { Gamecards } from "../Gamecards/Gamecards";

export const Scoreboard = ({ scores }) => {
  //Trimming full status
  let today = new Date();
  today = today.toDateString();
  today = today.slice(0, -4);
  today = today.slice(0, 3) + ", " + today.slice(3);
  return (
    <div className="scoreboard-background">
      <div className="d-flex justify-content-around align-items-center mb-4">
        <h2 className="scoreboard-title">{today}</h2>
        {scores.length > 1 ? (
          <button
            onClick={() => window.alert("Coming soon!")}
            className="standings-button"
          >
            Standings
          </button>
        ) : null}
      </div>
      <div className="games">
        {scores.map((game, i) => {
          // Mapping each individual game to a card
          return <Gamecards game={game} key={i}></Gamecards>;
        })}
      </div>
    </div>
  );
};
