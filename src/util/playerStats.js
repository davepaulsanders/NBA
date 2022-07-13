export const playerStats = {
  // API call to get stats for all players in a specific game

  async topScores(game) {
    let dateQuery;
    let today;
    let day;
    let month;
    let year;
    if (game.date) {
      dateQuery = game.date;
    } else {
      today = new Date();
      day = today.getDate();
      month = today.getMonth() + 1;
      year = today.getFullYear();
      dateQuery = year + "-" + month + "-" + day;
    }
    let gameId = `&game_ids[]=${game.id}`;
    let urlQuery = "https://www.balldontlie.io/api/v1/stats/?dates[]=";
    let gamesQuery = urlQuery + dateQuery + gameId;

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
