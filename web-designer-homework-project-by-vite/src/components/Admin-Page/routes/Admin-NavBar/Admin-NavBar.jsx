import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Admin-NavBar.css'
const AdminNavBar = () => {

    const [active, setActive] = useState('navBar')
    // function to toggle navBar
    
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    // function to remote navBar
    const remoteNavbar = () =>{
        setActive('navBar')
    }
  // function to toggle navBar

  return (

    <section className='NavBarContainer'>
    <header className='header flex'>
    <div>
    <ul className="navLists flex">
                    
                    <li className="navItem">
                        <Link to ="/admin/PackageEdit" className="navLink">Package Edit</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/admin/user" className="navLink">User Edit</Link>
                    </li>
                    </ul>
                    </div>
                    </header>
    </section>
    )
}

export default AdminNavBar