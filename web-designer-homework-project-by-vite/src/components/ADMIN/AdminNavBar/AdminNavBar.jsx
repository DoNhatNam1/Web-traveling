import React, { useState } from 'react'
import "./adminnavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { BsFillPieChartFill } from "react-icons/bs";
import { GiVerticalBanner } from "react-icons/gi";
import { CgUserList } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../src/assets/logo.png";

const AdminNavBar = () => {
  const [active, setActive] = useState('AdminnavBar')

  // function to toggle navBar
  
  const showNav = () =>{
      setActive('activeAdminNavbar')
  }
  // function to remote navBar
  const remoteNavbar = () =>{
      setActive('AdminnavBar')
  }
  return (
    <>
      <div className={active}>
        <div className="logo-container flex">
          <div onClick={showNav} className="toggleAdminNav">
            <AiOutlineMenu className="admin-icon" />
          </div>
          <div onClick={remoteNavbar} className="closeAdminNavbar">
            <AiFillCloseCircle className="admin-icon" />
          </div>
          <div className="logImgAndText">
            <Link to="/admindashboard/maindashboard" className="flex">
              <img
                src={logo}
                alt="Image Name"
                className="admin-dashboard-logo"
              />
              <h2>Travel.</h2>
            </Link>
          </div>
        </div>

        <div className="navbar-body">
          <div className="admin-nav-group">
            <div className="admin-nav-title">
              <p>DASHBOARD & APPS</p>
            </div>

            <ul className="admin-nav-select-item">
              <li className="admin-listItem">
                <button>
                  <MdOutlineDashboard className="admin-icon" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <GiVerticalBanner className="admin-icon" />
                  <span>Apps</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="admin-nav-group">
            <div className="admin-nav-title">
              <p>COMPONENTS & UI</p>
            </div>

            <ul className="admin-nav-select-item">
              <li className="admin-listItem">
                <button>
                  <span>UI Elements</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <CgUserList className="admin-icon" />
                  <span>Forms & Tables</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <BsFillPieChartFill className="admin-icon" />
                  <span>Charts</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="admin-nav-group">
            <div className="admin-nav-title">
              <p>COLECTIONS</p>
            </div>

            <ul className="admin-nav-select-item">
              <li className="admin-listItem">
                <button>
                  <span>Widgets</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <span>Ecommerce</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <span>Pages</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="admin-nav-group">
            <div className="admin-nav-title">
              <p>LOGIN & ERROR</p>
            </div>

            <ul className="admin-nav-select-item">
              <li className="admin-listItem">
                <button>
                  <BsFillShieldLockFill className="admin-icon" />
                  <span>Authentication</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <span>Misecellaneous</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-footer-admin flex">
          <div className="admin-footer-item-nav">
            <button className="admin-nav-footer-button">
              <AiFillSetting />
              <span>Setting</span>
            </button>
          </div>
          <div className="admin-footer-item-nav">
            <button className="admin-nav-footer-button">
              <MdMail className="admin-icon" />
              <span>Email</span>
            </button>
          </div>
          <div className="admin-footer-item-nav">
            <button className="admin-nav-footer-button">
              <CgLogOut className="admin-icon" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
