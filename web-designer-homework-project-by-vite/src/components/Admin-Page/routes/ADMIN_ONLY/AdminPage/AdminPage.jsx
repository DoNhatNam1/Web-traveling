import React from 'react'
import AddUser from '../../UsersInfo/AddUser'
import UserList from '../../UsersInfo/UserList'
import './adminPage.css'
import AdminNavBar from '../../Admin-NavBar/Admin-NavBar'
import AdminFooter from '../../Admin-Footer/Admin-Footer'

const AdminPage = () => {
  return (
    <div className='main grid'>
    <AdminNavBar />
    <section className='main-container'>
    <div className='finder-container grid'>
      <AddUser />
      <UserList />
    </div>
    </section>
    <AdminFooter />
    </div>
  )
}

export default AdminPage;