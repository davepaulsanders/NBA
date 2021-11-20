import React from "react";
import "./Gamecards.css";
import Sixers from "./img/Sixers.png";
import Mavericks from "./img/Mavericks.png";
export class Gamecards extends React.Component {
  render() {
    return (
      <div className="gamecard">
        <img className="homeimage" src={Sixers} alt="sixers logo"></img>
        <p className="hometeam">{this.props.game.home_team}</p>
        <p className="hometeamscore">{this.props.game.home_team_score}</p>
        <img className="awayimage" src={Mavericks} alt="sixers logo"></img>
        <p className="awayteam">{this.props.game.away_team}</p>
        <p className="awayteamscore">{this.props.game.away_team_score}</p>
        <p className="status">{this.props.game.status}</p>
      </div>
    );
  }
}
