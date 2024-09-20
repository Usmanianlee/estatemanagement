"use client"
import MovieCard from "@/app/components/MovieCard"
import Link from "next/link"
import { movies } from "@/app/data"
import { useContext, useState } from "react"
import { SidebarContext } from "@/app/providers"
import { Hachi_Maru_Pop } from "next/font/google"


const haa = Hachi_Maru_Pop({ subsets: ["latin"] , weight:['400']});



export default function MovieDetails({params}) {
    // const {setVal, movieItem, setMovieItem} = useContext(SideBarContext)

    const details = movies.find(movie => movie.Title.split(' ').join('-') ==params.id)

    function handleMovieAdd(){
        setVal(prev => prev + 1)
        setMovieItem([...movieItem, {title: details.Title,ep: details.Epilogue,cat:details.Category}])
    }

    const relatedMovies = movies.filter((card => card.Category == details.Category && details.Title !== card.Title))

    const relatedCard = relatedMovies.map((card,index) =>
        <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className="cursor-pointer" key={index}>
            <MovieCard title={card.Title} type={card.Type} rat={card.rating} img={card.Category}/>
        </Link>
    )

    return (
      <div className="px-16">
        <h1 className={`${haa.className} text-2xl`} style={{paddingBlock: '20px', backgroundColor: 'blue'}}>{details.Title}</h1>
        <p>{details.Epilogue}</p>
        <button onClick={handleMovieAdd}
          className="bg-slate-950 text-slate-50 p-3 rounded-md">Paradise 2 Estate</button>
  
          <div>
              <h2 className="text-4xl font-bold">related estate</h2>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedCard}

            
              
              </div>
            
          </div>
      </div>
    
  
    )
  }
  



