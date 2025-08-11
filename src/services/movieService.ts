import axios from 'axios';
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (page: number, query: string): Promise<Movie[]> => {
  const response = await axios.get<FetchMoviesResponse>(`https://api.themoviedb.org/3/search/movie`, {
    params: {
        page: page,
        query: query,
        include_adult: false,
    },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjIzZTA4ODc1ZTExYzdlMjY4ODY2NGJlODY2ZTViMCIsIm5iZiI6MTc1NDI0MzU3Mi4xMjUsInN1YiI6IjY4OGZhMWY0MTQ3MDllYzBhM2IyMmQxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._K0ukGIhT3umqsvti3Coc3cOacCvjxwbpJRYSfXn_3U`,
    //   'Content-Type': 'application/json',
    },
  });
  return response.data.results;
}
