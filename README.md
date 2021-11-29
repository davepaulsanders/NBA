# NBA SCORES

## Concept

This web app simply retrieves all NBA games on the current day and displays the the teams playing, their scores, and the status of the game (i.e. 1st quarter etc). It also dynamically loads logos for each team after fetching the data.

## Technologies Used

This was built as a React app using Javascript, HTML, and CSS. The API I used is called BallDontLie, which is found here: https://www.balldontlie.io/#introduction. It updates roughly every ten minutes.

### Future improvements

I would like to add a few things to this in the future:

- Change from class based to functional components
- Load the components in order based on the start time of the game
- Possibly use another API to provide additional data about the players in each game
- Make sure the logos render nicely no matter the team name length (this is really only an issue with the Timberwolves)
