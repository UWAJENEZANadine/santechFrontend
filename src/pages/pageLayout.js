import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import GoToTop from "../components/GoToTop"

export default function PageLayout({children}) {
  return (
    <div className="bg-gray-100 w-screen overflow-hidden">
      <Header/>
      <div className="">
        {children}
      </div>
      <Footer/>
      <GoToTop />
    </div>
  )
}
