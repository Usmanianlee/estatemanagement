import React from 'react'

export default function Header() {
  return (
    <div className='grid md:grid-cols-6 md:grid-flow-row-[300px_300px_300px] grid-cols-1 grid-rows-[200px_200px_200px] hover:bg-opacity-0 duration-300'>

      <div className='bg-[url(/house.jpg)] md:col-span-4 md:row-span-3 bg-cover'>ikoyi</div>

      <div className='bg-[url(/house3.jpg)] bg-cover md:row-span-2 md:col-span-2'>Abuja</div>

      <div className='bg-[url(/house4.jpg)] bg-cover'></div>

      <div className='bg-[url(/house2.jpg)] bg-cover'></div>
    </div>
  )
}