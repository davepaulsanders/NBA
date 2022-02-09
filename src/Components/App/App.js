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
        id: game.id,
        time: game.time,
      }));
      setGamesToday(res);
    });
  }, [gamesToday.hometeamscore, gamesToday.awayteamscore, gamesToday.status]);
  // Only reloads when scores or status change

  gamesToday.sort((a, b) => {
    const properOrderArray = [
      "Final",
      "4th",
      "3rd",
      "Halftime",
      "2nd",
      "1st",
      "1:00 PM ET",
      "1:30 PM ET",
      "2:30 PM ET",
      "3:00 PM ET",
      "3:30 PM ET",
      "4:30 PM ET",
      "5:00 PM ET",
      "5:00 PM ET",
      "6:00 PM ET",
      "6:30 PM ET",
      "7:00 PM ET",
      "7:30 PM ET",
      "8:00 PM ET",
      "8:30 PM ET",
      "9:00 PM ET",
      "9:30 PM ET",
      "10:00 PM ET",
      "10:30 PM ET",
    ];
    return (
      properOrderArray.indexOf(a.status) - properOrderArray.indexOf(b.status)
    );
  });
  return (
    <div className="App">
      <h1 className="title">NBA SCORES</h1>
      <Scoreboard scores={gamesToday} />
    </div>
  );
};
