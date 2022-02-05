export const playerStats = {
  async topScores(game) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let dateQuery = year + "-" + month + "-" + day;
    let gameId = `&game_ids[]=${game.id}`;
    let urlQuery = "https://www.balldontlie.io/api/v1/games/?dates[]=";
    let gamesQuery = urlQuery + dateQuery + gameId;

    const response = await fetch(gamesQuery);
    const { data } = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === game.id) {
        return data[i];
      }
    }
  },
};
