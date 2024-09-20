import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'


export default function MovieCard({title,type,rat,img,amt}) {
  return (
    <div className='flex flex-col items-center'>
        <Image src= {`/mv/${title.split(' ').join('')}.jpg`} alt={title} width={'300'} height={500} className='rounded-md'/>
        <p> <Rating name="half-rating-read" defaultValue={rat} precision={0.5} max={10} readOnly />
       </p>
        <h1>{title}</h1>
        <p>{type}</p>
        <p>{amt}</p>
     
    </div>
  )
}
