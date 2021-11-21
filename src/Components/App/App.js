import React from "react";
import "./App.css";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Ballislife } from "../../util/Ballislife";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          home_team: "Sixers",
          home_team_score: 98,
          away_team: "Mavs",
          away_team_score: 102,
          status: "1st quarter",
        },
        {
          home_team: "Cavaliers",
          home_team_score: 100,
          away_team: "Pelicans",
          away_team_score: 102,
          status: "1st quarter",
        },
        {
          home_team: "Lakers",
          home_team_score: 50,
          away_team: "Bulls",
          away_team_score: 120,
          status: "1st quarter",
        },
        {
          home_team: "Wizards",
          home_team_score: 101,
          away_team: "Jazz",
          away_team_score: 97,
          status: "1st quarter",
        },
        {
          home_team: "Sixers",
          home_team_score: 98,
          away_team: "Mavs",
          away_team_score: 102,
          status: "1st quarter",
        },
        {
          home_team: "Sixers",
          home_team_score: 98,
          away_team: "Mavs",
          away_team_score: 102,
          status: "1st quarter",
        },
        {
          home_team: "Sixers",
          home_team_score: 98,
          away_team: "Mavs",
          away_team_score: 102,
          status: "1st quarter",
        },
        {
          home_team: "Sixers",
          home_team_score: 98,
          away_team: "Mavs",
          away_team_score: 102,
          status: "1st quarter",
        },
      ],
    };
  }
  search(query) {
    Ballislife.search(query).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
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
