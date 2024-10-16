"use client"
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from 'next/link'
import { useState } from 'react'


export default function MobileNav() {
    const [open, setOpen] = useState(false)
    const [val, setVal] = useState(10)

    function changeVal(){
        setVal(prev => prev + 20)
    }

    function controlNav(){
        setOpen(!open)
    }

  return (
   <nav>
        <ul className='flex items-center justify-around md:hidden h-36'>
            <li>Home</li>
            <li onClick={controlNav} className='cursor-pointer'>
            <GiHamburgerMenu />
            </li>
        </ul>

        {open &&
            <ul className='flex flex-col justify-around md:hidden items-end h-72 pr-32'>
            <Link href={'/'}>
                <li>home</li>
            </Link>

            <Link href={'/about'}>
                <li>about us</li>
            </Link>

            <Link href={'/contact'}>
                <li>contact us</li>
            </Link>

            <Link href={'/gallery'}>
             <li>gallery</li>
            </Link>

            <Link href={'/help'}>
             <li>help</li>
            </Link>

            <Link href={'/help'}>
             <li>blog</li>
            </Link>

            <li>{val}</li>
            <li onClick={changeVal}>increase</li>



        </ul>
        }

   </nav>
  )
}

