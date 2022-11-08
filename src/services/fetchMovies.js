import axios from 'axios';

const KEY = '93fca4687d78764c2a220d92f59e9e96';
const BASIC_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovie = async () => {
    const response = await axios.get(`${BASIC_URL}trending/movie/day?api_key=${KEY}`);
    return response.data.results;
};

export const searchMovies = async query => {
    const response = await axios.get(`${BASIC_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    return response.data.results;
};
  
export const getMovieDetails = async movieId => {
    const response = await axios.get(`${BASIC_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
    return response.data;
};

export const getMovieCast = async movieId => {
    const response = await axios.get(`${BASIC_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
    return response.data.cast;
};

export const getMovieReviews = async movieId => {
    const response = await axios.get(`${BASIC_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
    return response.data.results;
};