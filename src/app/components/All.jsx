import React from 'react'
import Link from 'next/link'
import MovieCard from './MovieCard'
import { movies } from '../data'

export default function All() {
    const forAll = movies.filter(card => card.Type == 'Sale')

    const forAllCard = forAll.map((card, index) =>
        <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer' key={index}>
        <MovieCard title={card.Title} type={card.Type} rat ={card.rating} img={card.image} amt={card.Amount} />
        </Link>
    )
    
  return (
    <div>
      {forAllCard}
    </div>
  )
}
