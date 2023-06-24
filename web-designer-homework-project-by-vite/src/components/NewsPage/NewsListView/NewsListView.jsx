import React from 'react'
import Navbar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import NewsList from '../NewsList'
import './newlistview.css'

const NewsListView = () => {
  return (
    <>
    <Navbar/>
        <NewsList/>
    <Footer/>
    </>
  )
}

export default NewsListView