"use client"
import { movies } from '../data'
import Link from 'next/link'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import { IoMdSearch } from "react-icons/io";


export default function MoviePage() {
  const [searchMovie, setSearchMovie] = useState('')

  function filterSearch(e){
      setSearchMovie(e.target.value)
  }
  
  const filterList = movies.filter(movie => movie.Title.toLowerCase().includes
  (searchMovie.toLowerCase()) || movie.Category.toLowerCase().includes(searchMovie.toLowerCase()) )

  const cards = filterList.length == 0 ?(
      <h1>sorry, search items does not exist</h1>
  ) : filterList.map((card,index) => (
      <section key={index}>
          <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer'>
          <MovieCard title={card.Title} type={card.Type} rat ={card.rating} img={card.image}/>
          
          </Link>
      </section>
  )) 

  return (
    <>
    <div className="flex items-center justify-between p-3 border-4 rounded-full mt-4 border-slate-950 w-3/5 m-auto">
    <input type="text" name="search" id="search" className=" outline-none block mt-4 w-4/5 text-2xl" placeholder="search for movie category or actor" defaultValue={searchMovie} onChange={(e)=>filterSearch(e)}/>
    <IoMdSearch className="text-2xl"/>
    </div>
    <div className='grid grid-cols-3 gap-4 px-16 py-32 capitalize'>
        {cards}
    </div>
    
    </>
)

}
