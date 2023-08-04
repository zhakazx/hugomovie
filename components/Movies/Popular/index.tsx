"use client"
import { useState } from 'react'
import * as api from "@/services/api"
import useSWR from "swr"

const index = () => {
  const BASE_IMG_URL = process.env.NEXT_PUBLIC_BASEIMGURL;

  const [pageIndex, setPageIndex] = useState(1)
  
  const { data: popularMovies, isLoading: loadingPopular } = useSWR(
    `/movie/popular?page=${pageIndex}`, async () => {
      const response = await api.getPopularMovies(pageIndex);
      return response;
  })
  
  console.log(popularMovies);
    
  return (
    <div className="px-4 mt-4">
      <h3 className="relative mb-6 text-2xl tracking-wide font-semibold before:content-[''] before:bg-[url('/dots-bg.svg')] before:w-9 before:h-9 before:absolute before:-left-[0.875rem]">
        Most Popular Movies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {popularMovies && !loadingPopular && popularMovies?.results?.map((item: any, i: any) => (
          <div className="card md:card-side md:card-compact bg-white shadow-xl" key={i}>
            <figure className="h-[200px] md:h-full w-full md:w-[70%]">
              <img 
                src={`${BASE_IMG_URL}${item.poster_path}`} 
                alt="Movie"
                className="object-cover h-full w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">{ item.title }</h2>
              <p className="text-sm text-justify">
                {item.overview.length > 100 ?
                  `${item.overview.substring(0, 100)}...` : item.overview
                }
              </p>
              <div className="card-actions justify-between items-center text-sm">
                <div className="flex items-center">
                  <span>⭐ { item.vote_average }</span>
                </div>
                <button className="btn btn-sm btn-primary">See</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loadingPopular && (
        <div className="flex justify-center items-center">
          <span className="mx-auto loading loading-dots loading-lg"></span>
        </div>
      )}
      {popularMovies && !loadingPopular && (
        <div className="join flex justify-center items-center mt-4 mb-3">
          {pageIndex > 1 ? (
          <button 
            onClick={() => setPageIndex(pageIndex - 1)} 
            className="join-item btn btn-outline btn-primary w-[100px]">
              Previous
          </button>
          ) : (
          <button 
            disabled
            className="join-item btn btn-outline btn-primary w-[100px]">
              Previous
          </button>
          )}

          <button
            className="join-item btn btn-outline btn-primary">
              {pageIndex}
          </button>
           
          {pageIndex < popularMovies?.total_pages ? (
          <button 
            onClick={() => setPageIndex(pageIndex + 1)}
            className="join-item btn btn-outline btn-primary w-[100px]">
            Next
          </button>
          ) : (
          <button 
            disabled
            className="join-item btn btn-outline btn-primary w-[100px]">
              Next
          </button>
          )}
          
        </div>
      )}

    </div>
  )
}

export default index