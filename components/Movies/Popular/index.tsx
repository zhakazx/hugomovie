"use client"
import React from 'react'
import * as api from "@/services/api"
import useSWR from "swr"

const index = () => {
    const { data: popularMovies } = useSWR("/movie/popular", async () => {
        const response = await api.getPopularMovies();
        console.log("SWR RES", response);
        return response;
    })
  return (
    <div>

    </div>
  )
}

export default index