import React from "react";
import "./Scoreboard.css";
import { Gamecards } from "../Gamecards/Gamecards";

export const Scoreboard = ({ scores }) => {
  //Trimming full status
  // scores.map((score) => (score.status = score.status.substring(0, 8).trim()));
  let today = new Date();
  today = today.toDateString();
  today = today.slice(0, -4);
  return (
    <div className="scoreboard-background">
      <h2 className="scoreboard-title">{today}</h2>
      <div className="games">
        {/* {scores.map((game) => {
          // Mapping each individual game to a card
          return <Gamecards game={game}></Gamecards>;
        })} */}
      </div>
    </div>
  );
};
