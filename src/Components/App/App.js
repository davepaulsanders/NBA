import React, { useState, useEffect } from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";
export const App = () => {
  //Constructor is removed and replaced with functional component with empty state and set state
  const [gamesToday, setGamesToday] = useState([]);

  useEffect(() => {
    async function getGames() {
      return await Ballislife.search();
      // The data is  imported from Ballislife here and mapped to each game.
    }

    getGames().then((res) => {
      res.map((game) => ({
        hometeam: game.home_team.name,
        hometeamscore: game.home_team_score,
        awayteam: game.visitor_team.name,
        awayteamscore: game.visitor_team_score,
        status: game.status,
      }));
      setGamesToday(res);
    });
  }, []); // Something like this so it only reloads when those
  // specific score change

  return (
    <div className="App">
      <h1 className="title">NBA SCORES</h1>
      {/* This should pass down the new state that I created */}
      <Scoreboard scores={gamesToday} />
    </div>
  );
};
