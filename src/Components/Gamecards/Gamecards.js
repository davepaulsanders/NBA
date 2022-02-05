import React, { useState, useEffect } from "react";
import "./Gamecards.css";
import { playerStats } from "../../util/playerStats";
// Map through a folder of images and assign them alts

export const Gamecards = ({ game }) => {
  // Game keys and values are assigned to physical elements in the HTML
  // Specific images are assigned based on team
  // Public URL allows build to access public folder
  const [gameStats, setGameStats] = useState([]);

  useEffect(() => {
    async function getStats() {
      return await playerStats.topScores(game);
    }
    getStats().then((res) => setGameStats(res));
  }, [game]);

  let hometeamimage = process.env.PUBLIC_URL + `/img/${game.hometeam}.png`;
  let awayteamimage = process.env.PUBLIC_URL + `/img/${game.awayteam}.png`;

  return (
    <div className="gamecard">
      <img className="homeimage" src={hometeamimage} alt="home team logo"></img>
      <p className="hometeam">{game.hometeam}</p>
      <p className="hometeamscore">{game.hometeamscore}</p>
      <img className="awayimage" src={awayteamimage} alt="away team logo"></img>
      <p className="awayteam">{game.awayteam}</p>
      <p className="awayteamscore">{game.awayteamscore}</p>
      <p className="status">{game.status}</p>
      <div className="gamecard-back">
        <p className="title-for-scores">Top Scorers</p>
        <p className="hometeam-top-scorer">Embiid</p>
      </div>
    </div>
  );
};

//https://www.balldontlie.io/api/v1/stats/?dates[]=2022-02-01&player_ids[]=194

//This endpoint will get you player stats for a specific game.  Maybe I could use gameID
// To show which player has the highest points or something

//https://www.balldontlie.io/api/v1/players?search=lebron

//This is to get a player's id

//https://www.balldontlie.io/api/v1/stats/?dates[]=2022-02-01&game_ids[]=474178
//This will give you all the players stats for a specific game
