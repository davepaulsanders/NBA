import moment from "moment";
export const Ballislife = {
  // API call to get an array of all games happening on a current day
  async search(date) {
    let dateQuery
    if (date) {
      dateQuery = date;
    } else {
      dateQuery = moment().format("YYYY-MM-DD")
    }
    let urlQuery = "https://www.balldontlie.io/api/v1/games/?dates[]=";
    let gamesQuery = urlQuery + dateQuery;
    try {
      const response = await fetch(gamesQuery);
      if (response.ok) {
        const { data } = await response.json();
        return data;
      }
      throw new Error("Request failed!");
    } catch (err) {
      console.log(err);
    }
  },
};

//https://www.balldontlie.io/api/v1/stats/?dates[]=2022-02-01&player_ids[]=194

//This endpoint will get you player stats for a specific game.  Maybe I could use gameID
// To show which player has the highest points or something
