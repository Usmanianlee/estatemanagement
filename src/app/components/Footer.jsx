import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="h-36 bg-slate-900 flex items-center justify-center text-white">
        <p className="text-gray-600 hover:text-gray-400 p-4 text-sm md:text-base capitalize ">
          &copy; Lekki paradise 2 extension {(new Date('01-01-2015').getFullYear())} -{(new Date().getFullYear())} - All right reserved.</p>

        <div className="flex mt-2 space-x-7">
          <a href="https://www.facebook.com/" className="hover:text-blue-600 mx-2 text-gray-700 text-4xl "><FaFacebookF /></a>

          <a href="https://www.youtube.com/" className='text-gray-700 hover:text-gray-400 mx-2 text-4xl'><IoLogoYoutube />
          </a>

          <a href="https://www.whatsapp.com/" className='text-gray-700 hover:text-gray-400 mx-2 text-4xl'><FaWhatsapp />
          </a>

          <a href="https://www.instagram.com/" className='text-gray-700 hover:text-gray-400 mx-2 text-4xl'><FaInstagram />
          </a>

          <a href="https://www.twitter.com/" className='text-gray-700 hover:text-gray-400 mx-2 text-4xl'><FaSquareTwitter />
          </a>

        </div>
        

    </footer>
  )
}