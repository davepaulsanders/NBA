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
  }, []);

  const getGames = async (date) => {
    //making request for games of the day
    try {
      let response = await Ballislife.search(date)
      response = response.sort()
      setGamesToday(response)
      if (response.length === 0) {
        setNoGames(true);
      } else {
        setNoGames(false);
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const games = await getGames("2022-04-10");
    const final = games;
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
          <img className="loading" alt="loading" src={loading} />
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
