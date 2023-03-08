import React from 'react'
import AddPackage from '../../PackagesInfo/AddPackage'
import PackageList from '../../PackagesInfo/PackageList'
import Header from '../../PackagesInfo/Header'
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