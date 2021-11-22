import React from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }
  async componentDidMount() {
    let gamesToday = await Ballislife.search();
    // The data is  imported from Ballislife here and mapped to objects of each game.
    // Two things I don't understand. Why the "(" before the objecst in map, and how is
    // searchResults not as a key not require an extra drill down
    // Also, should this be in Ballislife.js instead?
    gamesToday = gamesToday.map((game) => ({
      hometeam: game.home_team.name,
      hometeamscore: game.home_team_score,
      awayteam: game.visitor_team.name,
      awayteamscore: game.visitor_team_score,
      status: game.status,
    }));
    this.setState({ searchResults: gamesToday });
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">NBA SCORES</h1>
        <Scoreboard scores={this.state.searchResults} />
      </div>
    );
  }
}
