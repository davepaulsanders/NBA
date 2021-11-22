import React from "react";
import "./Gamecards.css";
// Map through a folder of images and assign them alts

export class Gamecards extends React.Component {
  render() {
    // Game keys and values are assigned to physical elements in the HTML
    // Specific images are assigned based on team

    let hometeamimage = `/img/${this.props.game.hometeam}.png`;
    let awayteamimage = `/img/${this.props.game.awayteam}.png`;

    return (
      <div className="gamecard">
        <img
          className="homeimage"
          src={hometeamimage}
          alt="home team logo"
        ></img>
        <p className="hometeam">{this.props.game.hometeam}</p>
        <p className="hometeamscore">{this.props.game.hometeamscore}</p>
        <img
          className="awayimage"
          src={awayteamimage}
          alt="away team logo"
        ></img>
        <p className="awayteam">{this.props.game.awayteam}</p>
        <p className="awayteamscore">{this.props.game.awayteamscore}</p>
        <p className="status">{this.props.game.status}</p>
      </div>
    );
  }
}
