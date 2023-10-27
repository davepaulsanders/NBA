import React, { useState, useEffect } from "react";
import "./Gamecards.css";
import { playerStats } from "../../util/playerStats";
// Map through a folder of images and assign them alts
import moment from "moment";
export const Gamecards = ({ game }) => {
  // State to hold stats on all players in game
  const [gameStats, setGameStats] = useState([]);
  const {home_team: {name: home_team_name}, home_team_score, visitor_team: {name: visitor_team_name}, visitor_team_score, status} = game
  useEffect(() => {
    async function getStats() {
      return await playerStats.topScores(game);
    }
    getStats().then((res) => setGameStats(res));
  }, [game]);

  // Specific images are assigned based on team
  // Public URL allows build to access public folder
  let hometeamimage = process.env.PUBLIC_URL + `/img/${home_team_name}.png`;
  let awayteamimage = process.env.PUBLIC_URL + `/img/${visitor_team_name}.png`;
  if (gameStats[0]) {
    //If stats exist, sorts players for each game by highest points
    gameStats.sort((a, b) => {
      return b.pts - a.pts;
    });
    //Get the player with the highest points from both teams and put them at the top of the array
    const homeTeamTopScore = gameStats.find(
      (element) => element.team.name === home_team_name
    );
    const awayTeamTopScore = gameStats.find(
      (element) => element.team.name === visitor_team_name
    );
    gameStats.unshift(awayTeamTopScore);
    gameStats.unshift(homeTeamTopScore);
  }
  
    return (
      <div className="gamecard">
        <img
          className="homeimage"
          src={hometeamimage}
          alt="home team logo"
        ></img>
        <p className="hometeam">{home_team_name}</p>
        <p className="hometeamscore">{home_team_score}</p>
        <img
          className="awayimage"
          src={awayteamimage}
          alt="away team logo"
        ></img>
        <p className="awayteam">{visitor_team_name}</p>
        <p className="awayteamscore">{visitor_team_score}</p>
        <p className="status">{moment(status).format("LT")}</p>
        {gameStats[0] ? (<div className="gamecard-back">
          <p className="title-for-scores">Top Scorers</p>
          <p className="top-scorer-1">{gameStats[0].player.last_name}</p>
          <p className="score1">{gameStats[0].pts}</p>
          <p className="top-scorer-2">{gameStats[1].player.last_name}</p>
          <p className="score-2">{gameStats[1].pts}</p>
        </div> ) : (
        <div className="gamecard-back-empty">
          <p className="no-stats">No stats for this game yet!</p>
        </div>
        )}
      </div>
    );
  } 


//https://www.balldontlie.io/api/v1/stats/?dates[]=2022-02-01&player_ids[]=194

//This endpoint will get you player stats for a specific game.  Maybe I could use gameID
// To show which player has the highest points or something

//https://www.balldontlie.io/api/v1/players?search=lebron

//This is to get a player's id

//https://www.balldontlie.io/api/v1/stats/?dates[]=2022-02-01&game_ids[]=474178
//This will give you all the players stats for a specific game
//might be something like gameStats
