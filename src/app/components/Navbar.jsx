import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white text-lg">
        <ul className='md:flex h-36 hidden justify-around items-center'>
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



        </ul>

        <MobileNav />


    </nav>
  )
}