import React from "react";
import "./Scoreboard.css";
import { Gamecards } from "../Gamecards/Gamecards";
import moment from "moment";
export const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard-background">
      <div className="d-flex justify-content-around align-items-center mb-4">
        <h2 className="scoreboard-title">{moment().format("MMM Do")}</h2>
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
