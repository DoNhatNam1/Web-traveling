import React from 'react'
import PackageList from '../../PackagesTuyenInfo/PackageListTuyen'
import './adminpagepackage.css'
import AdminNavBar from '../../Admin-NavBar/Admin-NavBar'
import AdminFooter from '../../Admin-Footer/Admin-Footer'
import { Link } from 'react-router-dom'

const AdminPagePackage = () => {
  return (
    <div className='main grid'>
    <AdminNavBar />
    <section className='main-container'>
    <div className='finder-container grid'>
      <div className='btn-add-new-user'>
                    <button className='btn'>
                        <Link to='/admin/PackageEdit/add' >ADD NEW</Link>
                    </button>
      </div>
      <PackageList />
    </div>
    </section>
    <AdminFooter />
    </div>
  )
}

export default AdminPagePackage;