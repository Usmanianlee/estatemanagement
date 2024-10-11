"use client"
import Image from "next/image";
import Rent from "./components/Rent";
import Sale from "./components/Sale";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { useState } from "react";
import Link from "next/link";
import { movies } from "./data";
import All from "./components/All";


export default function Home() {

    const [openRent, setOpenRent] = useState(false)
    const [openSale, setOpenSale] = useState(false)


    function handleRent(){
        setOpenRent(!openRent)
    }

    function handleAll(){
        setActiveTab(!activeTab)
        
    }

    function handleSale(){
        setOpenSale(!openSale)
    }

    return (        
    <>
    <Header />

    <ul className="flex ml-[1200px] gap-10">
        <li className="bg-orange-700 text-white border-orange-700 cursor-pointer" onClick={handleSale}>all</li>
        <li className={"bg-orange-700 text-white cursor-pointer"} onClick={handleRent}>rent</li>
        <li className={"bg-orange-700 text-white cursor-pointer"} onClick={handleSale}>sale</li>
    </ul>

    {openRent && <Rent />}
    {openSale && <Sale />}
    {/* {openAll && <All />} */}


    <MovieList />

    </>
    )
}