import React from 'react';
import DetailBlog from '../DetailBlog';
import Navbar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import './detailblog.css';

const DetailBlogView = () => {
  return (
    <>
    <Navbar/>
    <DetailBlog />
    <Footer/>
    </>
  )
}

export default DetailBlogView