import React from "react";
import "./Scoreboard.css";
import { Gamecards } from "../Gamecards/Gamecards";

export const Scoreboard = ({ scores }) => {
  scores.map((score) => (score.status = score.status.substring(0, 8).trim()));

  return (
    <div className="scoreboard-background">
      <h2 className="scoreboard-title">Games Today!</h2>
      <div className="games">
        {/* Mapping each individual game to a card */}

        {scores.map((game) => {
          return <Gamecards game={game}></Gamecards>;
        })}
      </div>
    </div>
  );
};
