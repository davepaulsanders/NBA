export const Ballislife = {
  async search(query) {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let dateQuery = year + "-" + month + "-" + day;
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
