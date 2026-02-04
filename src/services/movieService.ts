import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}

export async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesResponse> {
  const { data } = await axios.get<MoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
        page,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return {
    results: data.results,
    total_pages: data.total_pages,
  };
}
