import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from "./components/Footer";

const inter = Inter ({ subsets: ["latin"]});

export const metadata = {
  title: "create a estate management website",
  description: "Estate website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <body className={inter.className}>
      <Navbar />

    <div className="min-h-screen">

      {children}
      
    </div>
      <Footer />
    </body>
    </html>
  )
}

