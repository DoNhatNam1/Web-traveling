import React from 'react'
import "./adminmaindashnoard.css"
import AdminNavBar from "../AdminNavBar/AdminNavBar"
import AdminMainContainer from "../AdminMainContainer/AdminMainContainer"

const AdminMainDashBoard = () => {
  return (
    <div className='admin-main-dashboard flex'>
      <div className="adminNavDiv">
        <AdminNavBar/>
      </div>
      <div className="adminContainDiv">

        <AdminMainContainer/>
      </div>
    </div>
  )
}

export default AdminMainDashBoard