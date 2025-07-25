import axios from "axios";
import { type Movie } from "../types/movie";
const BASE_URL = "https://api.themoviedb.org/3";

export interface SearchResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<SearchResponse> => {
  const response = await axios.get<SearchResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data;
};
