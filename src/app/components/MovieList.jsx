import React from 'react'
import MovieCard from './MovieCard'
import { movies } from '../data'
import Link from 'next/link'


export default function MovieList() {

        const cards = movies.sort((x,y) => y.rating - x.rating).map((card,index) => (
            <section key={index}>
                <Link href={`/movies/${card.Title.split(' ').join('-')}`} title={card.Title} className='cursor-pointer'>
                <MovieCard title={card.Title} type={card.Type} rat ={card.rating} img={card.image} amt={card.Amount} />
                </Link>

            </section>
        
        ))

        return (
            <>
            <div className='grid grid-cols-3 gap-4 px-16 py-32 capitalize'>
                {cards}
                
            </div>
            <Link href={'/movies'} className='flex items-center justify-center'>
            <span className='bg-slate-950 text-white rounded-md  p-3'>see more</span>
            </Link>
            </>
            )
        }

