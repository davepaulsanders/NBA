import React from "react";
import "./Gamecards.css";
// Map through a folder of images and assign them alts

export const Gamecards = ({ game }) => {
  // Game keys and values are assigned to physical elements in the HTML
  // Specific images are assigned based on team

  // Public URL allows build to access public folder
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
    </div>
  );
};
