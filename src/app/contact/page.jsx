import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import MobileNav from '../components/MobileNav';




export default function page() {
  return (
    <div className='md:block hidden'>
      <h1 className='font-bold h-60 px-24 py-10 bg-blue-200 capitalize'>contact us</h1>

      <p className='h-20 py-16 px-36'> 
        Fill out the form below and we&apos;ll get back to you shortly.
      </p>

      <div className='flex h-[600px] w-[980px] rounded-xl border-solid border-2 border-slate-300 border-opacity-50 m-auto my-10 p-4'>
        <div className='bg-slate-800 h-[560px] w-[560px] pl-2 ml-auto rounded-md p-5'>
          <h2 className='text-white m-4 capitalize font-semibold text-3xl text-left ml-5'>contact information</h2>
          <p className='text-slate-300 my-2 text-[16px] ml-5 mt-4'>say something to start a live chat</p>
          <p className='flex items-center text-white ml-5 mt-20 text-sm'>
            <span className='text-2xl mr-5'><PiPhoneCallFill /></span>
            <span>+86-765744677</span>
          </p>
          <p className='flex items-center ml-5 text-white mt-10 text-sm'>
            <span className='text-2xl mr-5'>< MdEmail /> </span>
            <span>info@example.com</span>
          </p>
          <address className='flex items-center ml-5 text-slate-600 mt-10 text-sm'>
            <span className='text-2xl mr-5 '><IoLocation /></span>
            <span>Dt 2, lekki paradise 2 extension <br />estate, chevron, lagos state</span>
          </address>
        </div>

        <div className='flex flex-wrap w-[600px] mt-12 ml-8'>
          <div>
            <label for="firstName" className='text-slate-500 capitalize'>Enter First Name</label>
            <input for="firstName" className='block outline-none border-b-2 border-slate-600 w-[215px]'/>
          </div>
          <div className='ml-8'>
            <label for="firstName" className='text-slate-500 capitalize'>Enter Last Name</label>
            <input for="firstName" className='block outline-none border-b-2 border-slate-600 w-[215px]'/>
          </div>
          <div>
            <label for="firstName" className='text-slate-500 capitalize'>Enter Email Address</label>
            <input for="firstName" className='block outline-none border-b-2 border-slate-600 w-[215px]'/>
          </div>
          <div className='ml-8'>
            <label for="firstName" className='text-slate-500 capitalize'>Enter Phone Number</label>
            <input for="firstName" className='block outline-none border-b-2 border-slate-600 w-[215px]'/>
          </div>
          <div>
            <label for="firstName" className='text-slate-500 capitalize'>Message</label>
            <input for="firstName" className='block outline-none border-b-2 border-slate-600 w-[215px]'/>
          </div>
          <div>
            <button className='capitalize text-white h-12 w-36 bg-fuchsia-300 rounded-md ml-72 mt-6 mb-32'>Send Message</button>
          </div>
        </div>

      </div>

      {/* <form className='py-20 px-20 justify-center'>
        <fieldset>
          <ul>
            <li>
            <label for="fullname">Full Name</label>
            <input className='outline-dashed mt-4 text-black ml-3 text-sm' type="text" name="name" id="fullname" placeholder='enter your fullname'/>
            
            </li>
            <label for="email">Email Address</label>
            <input className='outline-dashed mt-5 text-black ml-3 text-sm' type="email" name="email" id="email" placeholder='enter your email'/>
            <li>
            <label For="Message">Message</label>
            <input className='outline-dashed mt-4 h-36 w-3/4 ml-3' type="text" name="Message" id="message" placeholder='send us a message' />
            </li>

      

          </ul>
          
        </fieldset>
        <input type="button" value="Submit"/>

      </form> */}

        


        <MobileNav/>
    </div>

  )


}



