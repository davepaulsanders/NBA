export const playerStats = {
  async topScores(game) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let dateQuery = year + "-" + month + "-" + day;
    let gameId = `&game_ids[]=${game.id}`;
    let urlQuery = "https://www.balldontlie.io/api/v1/stats/?dates[]=";
    //let gamesQuery = urlQuery + dateQuery + gameId;
    let gamesQuery =
      "https://www.balldontlie.io/api/v1/stats/?dates[]=2022-02-08" + gameId;
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
