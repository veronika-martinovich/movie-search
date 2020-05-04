export async function getMovieData(searchFlags, searchQueries) {
  const API_KEY = "23102067";
  let query = `http://www.omdbapi.com/?`;
  searchFlags.forEach((item, index) => {
    query += `${item}=${searchQueries[index]}&`;
  });
  query += `apikey=${API_KEY}`;
  const movieData = fetch(query).then((response) => response.json());
  return movieData;
}
