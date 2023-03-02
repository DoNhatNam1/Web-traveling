import React from 'react'
import AddPackage from '../../AddPackage'
import PackageList from '../../PackageList'
import Header from '../../Header'
import './adminPage.css'

const AdminPage = () => {
  return (
    <div className='finder-container'>
      <Header />
      <AddPackage />
      <PackageList />
    </div>
  )
}

export default AdminPage;