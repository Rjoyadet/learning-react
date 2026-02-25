const API_KEY ="d0f85804bc400bfe5257c48e5724e0f9";
const BASE_URL ="https://api.themoviedb.org"

export const getPopularMovies = async () => {
    const response  = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
const data = await response.json()
return data.results
};

export const searchMovies = async (query) => {
    const response  = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);
const data = await response.json()
return data.results
};
