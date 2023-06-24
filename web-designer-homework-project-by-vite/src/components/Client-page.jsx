import React from 'react'
import Navbar from './NavBar/NavBar'
import Home from './Home/Home'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import SearchHomePage from './SearchHomePage/SearchHomePage'

const ClientPage = () => {
  return (

    <>
    <Navbar />
    <Home />
    <SearchHomePage/>
    <Main />
    <Footer />
    </>

  )
}

export default ClientPage