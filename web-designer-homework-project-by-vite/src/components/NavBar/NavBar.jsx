import React, { useState } from 'react'
import './navbar.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [active, setActive] = useState('navBar')
    // function to toggle navBar
    
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    // function to remote navBar
    const remoteNavbar = () =>{
        setActive('navBar')
    }
    
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <Link to="/" className="logo flex">
                    <h1><SiYourtraveldottv className="icon"/>  Travel.</h1>
                </Link>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <Link to="/packages" className="navLink">Packages</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/shop" className="navLink">Shop</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/about" className="navLink">About</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/pages" className="navLink">Pages</Link>
                    </li>
                    <li className="navItem">
                        <Link to ="/news" className="navLink">News</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/contact" className="navLink">Contact</Link>
                    </li>


                    <button className='btn'>
                        <Link to='/bookform' >BOOK NOW</Link>
                    </button>
                </ul>

                <div onClick={remoteNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icon" />
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>

        </header>
    </section>
  )
}

export default Navbar