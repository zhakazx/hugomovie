import React from 'react'

const index = () => {
  return (
    <div className="mt-2 p-4">
      <div>
        <div className="carousel w-full h-[350px] md:h-[500px] rounded-xl">
          <div id="slide1" className="carousel-item relative w-full rounded-xl">
            <img src="/hero/hero1.webp" className="w-full object-cover rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full rounded-xl">
            <img src="/hero/hero2.webp" className="w-full object-cover rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full rounded-xl">
            <img src="/hero/hero3.webp" className="w-full object-cover rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full rounded-xl">
            <img src="/hero/hero4.webp" className="w-full object-cover rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index