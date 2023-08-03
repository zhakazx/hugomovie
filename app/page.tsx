import Navbar from "@/components/Navbar"
import Carousel from "@/components/Carousel"
import Popular from "@/components/Movies/Popular"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Popular />
    </div>
  )
}
