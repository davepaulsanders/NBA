import React, { useState, useEffect } from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";
import { cloneElement } from "react/cjs/react.production.min";

export const App = () => {
  const [gamesToday, setGamesToday] = useState([]);
  useEffect(() => getGames().then((res) => setGamesToday(res)), []);

  const getGames = async () => {
    try {
      console.log("updated!");
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
    arr.map((game) => {
      return (game = {
        hometeam: game.home_team.name,
      });
    });
  };
  sort(gamesToday);
  config(gamesToday);
  return (
    <div className="App">
      <h1 className="title" href="https://nba-games.netlify.app/">
        NBA SCORES
      </h1>
      <Scoreboard scores={gamesToday} />
    </div>
  );
};
