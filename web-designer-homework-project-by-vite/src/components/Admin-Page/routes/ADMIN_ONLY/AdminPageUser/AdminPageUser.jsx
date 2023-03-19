import React from 'react'
import UserList from '../../UsersInfo/UserList'
import './adminPage.css'
import AdminNavBar from '../../Admin-NavBar/Admin-NavBar'
import AdminFooter from '../../Admin-Footer/Admin-Footer'
import { Link } from 'react-router-dom'

const AdminPageUser = () => {
  return (
    <div className='main grid'>
    <AdminNavBar />
    <section className='main-container'>
    <div className='finder-container grid'>
      <div className='btn-add-new-user'>
                    <button className='btn'>
                        <Link to='/admin/user/add' >ADD NEW</Link>
                    </button>
      </div>
      <UserList />
    </div>
    </section>
    <AdminFooter />
    </div>
  )
}

export default AdminPageUser;