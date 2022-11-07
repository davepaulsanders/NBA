import React, { useState, useEffect } from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";
import upArrow from "../../assets/arrow.png";
import loading from "../../assets/loading.gif";

//this function calls sort and reconfigures the games object before adding it to state

export const App = () => {
  const [noGames, setNoGames] = useState();
  const [gamesToday, setGamesToday] = useState([]);
  useEffect(() => {
    // initial call for games before setting interval
    getGames()
      .then((res) => {
        sort(res);
        return res;
      })
      .then((res) => {
        const games = config(res);
        return games;
      })
      .then((games) => {
        setGamesToday(games);
        if (games.length === 0) {
          setNoGames(true);
        } else {
          setNoGames(false);
        }
      });
  }, []);

  const getGames = async (date) => {
    //making request for games of the day
    try {
      const response = await Ballislife.search(date);
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
    // reconfiguring games object for simpler reading
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
  const handleClick = async (e) => {
    e.preventDefault();
    const games = await getGames("2022-04-10");
    const final = config(games);
    final.forEach((game) => (game.date = "2022-04-10"));
    setGamesToday(final);
  };
  return (
    <div className="App">
      <div className="banner">
        <a href="https://nba-games.netlify.app/">
          <h1 className="title">NBA Scores</h1>
        </a>
      </div>
      <Scoreboard scores={gamesToday} />
      {noGames === undefined && (
        <div className="w-100 d-flex items-center justify-content-center">
          <img className="loading" src={loading} />
        </div>
      )}
      {noGames && (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className="no-games m-0 no-games-today">No games today?</p>
          <button onClick={handleClick} className="past-games-button">
            Past games
          </button>
          <div className="arrows-container d-flex justify-content-around mt-1">
            <img className="up-arrow" src={upArrow} alt="arrow"></img>
            <img className="up-arrow" src={upArrow} alt="arrow"></img>
            <img className="up-arrow" src={upArrow} alt="arrow"></img>
            <img className="up-arrow" src={upArrow} alt="arrow"></img>
            <img className="up-arrow" src={upArrow} alt="arrow"></img>
            <img className="up-arrow" src={upArrow} alt="arrow"></img>
          </div>
          <p className="no-games m-0">
            Click to see what this site looks like during the season!
          </p>
        </div>
      )}
    </div>
  );
};
