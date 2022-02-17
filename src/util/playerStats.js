export const playerStats = {
  // API call to get stats for all players in a specific game

  async topScores(game) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let dateQuery = year + "-" + month + "-" + day;
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
