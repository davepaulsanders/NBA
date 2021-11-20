import React from "react";
import "./Gamecards.css";
export class Gamecards extends React.Component {
  render() {
    return (
      <div className="gamecard">
        <p className="hometeam">{this.props.game.home_team}</p>
        <p className="hometeamscore">{this.props.game.home_team_score}</p>
        <p className="awayteam">{this.props.game.away_team}</p>
        <p className="awayteamscore">{this.props.game.away_team_score}</p>
        <p className="status">{this.props.game.status}</p>
      </div>
    );
  }
}