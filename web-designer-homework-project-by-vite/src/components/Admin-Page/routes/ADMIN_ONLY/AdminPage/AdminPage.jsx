import React from 'react'
import AddUser from '../../UsersInfo/AddUser'
import UserList from '../../UsersInfo/UserList'
import Header from '../../PackagesInfo/Header'
import './adminPage.css'

const AdminPage = () => {
  return (
    <section>
    <div className='finder-container'>
      <Header />
      <AddUser />
      <UserList />
    </div>
    </section>
  )
}

export default AdminPage;