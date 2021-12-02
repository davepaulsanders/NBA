import React, { useState, useEffect } from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";
export const App = () => {
  //Constructor is removed and replaced with functional component with empty state and set state
  const [gamesToday, setGamesToday] = useState([]);

  useEffect(() => {
    async function getGames() {
      let searchGames = await Ballislife.search();
      //I think there needs to be a .then
      // The data is  imported from Ballislife here and mapped to each game.

      //maybe I could update the state with this map?
      searchGames.map((game) => ({
        hometeam: game.home_team.name,
        hometeamscore: game.home_team_score,
        awayteam: game.visitor_team.name,
        awayteamscore: game.visitor_team_score,
        status: game.status,
      }));
    }
    getGames();
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
