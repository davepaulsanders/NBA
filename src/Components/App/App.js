import React, { useState, useEffect } from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";

export const App = () => {
  const [gamesToday, setGamesToday] = useState([]);
  useEffect(() => {
    const cleanUpGames = async () => {
      let games = await getGames();
      sort(games);
      const newGames = config(games);
      setGamesToday(newGames);
    };
    cleanUpGames();
  }, []);
  const getGames = async () => {
    try {
      const response = await Ballislife.search();
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const sort = (array) => {
    array.sort((a, b) => {
      // Sorting games by status
      const properOrderArray = [
        "Final",
        "1st Qtr",
        "2nd Qtr",
        "Halftime",
        "3rd Qtr",
        "4th Qtr",
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
  };

  const config = (arr) => {
    const mapToSimplify = arr.map((game) => ({
      hometeam: game.home_team.name,
      hometeamscore: game.home_team_score,
      awayteam: game.visitor_team.name,
      awayteamscore: game.visitor_team_score,
      status: game.status,
      id: game.id,
      time: game.time,
    }));
    return mapToSimplify;
  };

  return (
    <div className="App">
      <h1 className="title" href="https://nba-games.netlify.app/">
        NBA SCORES
      </h1>
      <Scoreboard scores={gamesToday} />
    </div>
  );
};
