export async function getMovieData(searchFlags, searchQueries) {
  try {
    const API_KEY = "23102067";
    let query = `http://www.omdbapi.com/?apikey=${API_KEY}`;
    searchFlags.forEach((item, index) => {
      query += `&${item}=${searchQueries[index]}`;
    });
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error('Data unavailable');
    }
    const movieData = await response.json()
    return movieData;
  } catch (err) {
    console.log(err);
  }
}
