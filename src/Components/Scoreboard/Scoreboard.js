import React from "react";
import "./Scoreboard.css";
import { Gamecards } from "../Gamecards/Gamecards";

export const Scoreboard = ({ scores }) => {
  scores.map((score) => (score.status = score.status.substring(0, 8).trim()));

  const newScores = scores.sort((game1, game2) => {
    let a = game2.status.replace(":", "").substring(0, 4);
    let b = game1.status.replace(":", "").substring(0, 4);
    return b - a;
  });

  return (
    <div className="scoreboard-background">
      <h2 className="scoreboard-title">Games Today!</h2>
      <div className="games">
        {/* Mapping each individual game to a card */}

        {newScores.map((game) => {
          return <Gamecards game={game}></Gamecards>;
        })}
      </div>
    </div>
  );
};
