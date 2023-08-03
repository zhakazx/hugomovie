import useSWR from "swr";
import * as api from "../services/api";

export const useFetch = () => {
  return {
    GetPopularMovies: () =>
      useSWR("/movie/popular", async () => {
        const response = await api.getPopularMovies();
        console.log("SWR RES", response);
        return response;
      }),
  };
};
