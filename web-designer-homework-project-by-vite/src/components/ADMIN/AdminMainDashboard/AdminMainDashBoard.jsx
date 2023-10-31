import React from 'react'
import "./adminmaindashnoard.css"
import AdminNavBar from "../AdminNavBar/AdminNavBar"
import AdminMainContainer from "../AdminMainContainer/AdminMainContainer"
import adminIcon from '../../../assets/logos+icons - Copy/admin-icon.svg'
import adminIcon2 from '../../../assets/logos+icons - Copy/admin-icon2.png'
import adminIcon3 from '../../../assets/logos+icons - Copy/admin-icon3.png'
import adminIcon4 from '../../../assets/logos+icons - Copy/admin-icon4.png'
import adminIcon5 from '../../../assets/logos+icons - Copy/admin-icon5.png'
import adminIcon6 from '../../../assets/logos+icons - Copy/admin-icon6.png'
import adminIcon7 from '../../../assets/logos+icons - Copy/admin-icon7.png'
import adminIcon8 from '../../../assets/logos+icons - Copy/admin-icon8.png'
import NavLogoAdmin from '../../../assets/logos+icons - Copy/logo (2).png'
import menuIconAdmin from '../../../assets/logos+icons - Copy/menuIcon-Navbar.png'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'

const AdminMainDashBoard = () => {
  return (
    // <div className='admin-main-dashboard flex'>
    //   <div className="adminNavDiv">
    //     <AdminNavBar/>
    //   </div>
    //   <div className="adminContainDiv">

    //     <AdminMainContainer/>
    //   </div>
    // </div>
<div className="banner-dashboard">
      <div className="div">
        <div className="top-section">
        <div className="top-left">
          <AiFillMessage />
          <AiFillMessage />
          <AiFillMessage />
        </div>
          <div className="top-right">
            <div className="zoom-btn">
            < MdOutlineZoomOutMap className='img' />
            </div>
            <input className="search-group">
              {/* <div className="inputSearchGroup" />
              <div className="search-icon">
              <BsSearch className= 'img'/>
              </div>
              <div className="text-wrapper">Search...</div> */}
            </input>
            <img className="img" alt="Bell icon" src="bell-icon.svg" />
            <img className="img" alt="User icon" src="user-icon.svg" />
            <img className="img" alt="Show mess and task" src="show-mess-and-task-icon.svg" />
          </div>
        </div>
        <div className="bodynavbar-group">
          <div className="overlap-group">
            <div className="navlists-title">
              <div className="text-wrapper-2">DASHBOARD &amp; APPS</div>
            </div>
            <div className="banner-campaign-wrapper">
              <div className="text-wrapper-2">BANNER &amp; CAMPAIGN</div>
            </div>
            <div className="users-managers-wrapper">
              <div className="text-wrapper-2">USERS &amp; MANAGERS</div>
            </div>
            <div className="login-error-wrapper">
              <div className="text-wrapper-2">LOGIN &amp; ERROR</div>
            </div>
            <div className="item-group">
              <img className="admin-icon" alt="Admin icon" src={adminIcon} />
              <div className="text-wrapper-3">Dashboard</div>
            </div>
            <div className="item-group-2">
              <img className="admin-icon" alt="Admin icon" src={adminIcon2} />
              <div className="text-wrapper-3">Apps</div>
              <div className="text-wrapper-4">
                <BsArrowRightShort />
              </div>
            </div>
            <div className="item-group-3">
              <img className="admin-icon" alt="Admin icon" src={adminIcon4} />
              <div className="text-wrapper-3">Campaign</div>
              <div className="text-wrapper-4">
                <BsArrowRightShort className='arrow-icon' />
                </div>
            </div>
            <div className="item-group-4">
              <img className="admin-icon" alt="Admin icon" src={adminIcon3} />
              <div className="text-wrapper-3">Banner</div>
              <div className="text-wrapper-4">
              <BsArrowRightShort className='arrow-icon' />
              </div>
            </div>
            <div className="item-group-5">
              <img className="admin-icon" alt="Admin icon" src={adminIcon6} />
              <div className="text-wrapper-3">Managers List</div>
            </div>
            <div className="item-group-6">
              <img className="admin-icon" alt="Admin icon" src={adminIcon8} />
              <div className="text-wrapper-3">Miscellaneous</div>
              <div className="text-wrapper-4">
              <BsArrowRightShort className='arrow-icon' />
              </div>
            </div>
            <div className="item-group-7">
              <img className="admin-icon" alt="Admin icon" src={adminIcon5} />
              <div className="text-wrapper-3">Users List</div>
            </div>
            <div className="item-group-8">
              <img className="admin-icon" alt="Admin icon" src={adminIcon7} />
              <div className="text-wrapper-3">Authentication</div>
              <div className="text-wrapper-4">
              <BsArrowRightShort className='arrow-icon' />
              </div>
            </div>
            <div className="selected-item-shape" />
          </div>
        </div>
        <div className="topnavbar-group">
          <div className="menuicon-navbar">
            <img className="menu-icon" alt="Menu icon" src={menuIconAdmin} />
          </div>
          <div className="imgandtext-group">
            <img className="logo" alt="Logo" src={NavLogoAdmin} />
            <div className="text-wrapper-5">Travel.</div>
          </div>
        </div>
        <img className="footernavbar-group" alt="Footernavbar group" src="footernavbar-group.svg" />
      </div>
    </div>
  )
}

export default AdminMainDashBoard