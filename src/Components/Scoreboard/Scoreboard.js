import React from "react";
import "./Scoreboard.css";
import { Gamecards } from "../Gamecards/Gamecards";

export class Scoreboard extends React.Component {
  render() {
    return (
      <div className="scoreboard-background">
        <h2 className="scoreboard-title">Games Today!</h2>
        <div className="games">
          {/* Each gamecard will be handed a prop that includes all the data from each */}
          {/* individual game */}
          {this.props.scores.map((game) => {
            return <Gamecards game={game}></Gamecards>;
          })}
        </div>
      </div>
    );
  }
}
