import React from "react";
import "./Scoreboard.css";
import { Gamecards } from "../Gamecards/Gamecards";

export const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard-background">
      <h2 className="scoreboard-title">Games Today!</h2>
      <div className="games">
        {/* Each gamecard will be handed a prop that includes all the data from each */}
        {/* individual game */}
        {scores.map((game) => {
          return <Gamecards game={game}></Gamecards>;
        })}
      </div>
    </div>
  );
};
