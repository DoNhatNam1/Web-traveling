import React from 'react'
import "./adminmaincontainer.css"
import AdminTopSection from '../AdminTopSection/AdminTopSection'
import AdminBottomSection from '../AdminBottomSection/AdminBottomSection'

const AdminMainContainer = () => {
  return (
    <div className='admin-container-main grid'>
      <AdminTopSection/>
      <AdminBottomSection/>
    </div>
  )
}

export default AdminMainContainer