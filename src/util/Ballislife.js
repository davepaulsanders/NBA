export const Ballislife = {
  // API call to get an array of all games happening on a current day
  async search(date) {
    let dateQuery, today, day, month, year;
    if (date) {
      dateQuery = date;
    } else {
      today = new Date();
      day = today.getDate();
      month = today.getMonth() + 1;
      year = today.getFullYear();
      dateQuery = year + "-" + month + "-" + day;
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
