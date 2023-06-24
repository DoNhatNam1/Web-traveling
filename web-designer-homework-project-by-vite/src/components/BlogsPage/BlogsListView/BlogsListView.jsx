import React from 'react'
import Navbar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import BlogsList from "../BlogsList";
import './blogview.css'



const BlogsListView = () => {
  return (
    <>
    <Navbar/>
        <BlogsList/>
    <Footer/>
    </>
    
  )
}

export default BlogsListView