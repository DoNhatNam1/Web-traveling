import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
        This is Dashboard Page
        <Link to="/login" className="navLink">Log out</Link>
    </div>
  )
}

export default Dashboard