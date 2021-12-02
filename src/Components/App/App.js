import React, { useState, useEffect } from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";

export const App = () => {
  const [gamesToday, setGamesToday] = useState([]);

  useEffect(() => {
    async function getGames() {
      return await Ballislife.search();
      // The data is imported from Ballislife here and specific properties are moved and mapped to objects in array.
    }

    getGames().then((res) => {
      res = res.map((game) => ({
        hometeam: game.home_team.name,
        hometeamscore: game.home_team_score,
        awayteam: game.visitor_team.name,
        awayteamscore: game.visitor_team_score,
        status: game.status,
      }));
      setGamesToday(res);
    });
  }, [gamesToday.hometeamscore, gamesToday.awayteamscore, gamesToday.status]);
  // Only reloads when scores or status change

  return (
    <div className="App">
      <h1 className="title">NBA SCORES</h1>
      <Scoreboard scores={gamesToday} />
    </div>
  );
};
