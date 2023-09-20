import React from "react";
import "./adminnavbar.css";
import { AiOutlineMenu } from 'react-icons/ai'
import { AiFillSetting } from 'react-icons/ai'
import { MdOutlineDashboard } from 'react-icons/md'
import { MdMail } from 'react-icons/md'
import { BsFillPieChartFill } from 'react-icons/bs'
import { GiVerticalBanner } from 'react-icons/gi'
import { CgUserList } from 'react-icons/cg'
import { CgLogOut } from 'react-icons/cg'
import { BsFillShieldLockFill } from 'react-icons/bs'

const AdminNavBar = () => {
  
  return (
    <>
      <div className="navbar-main">
        <div className="logo-container">
          <AiOutlineMenu />
          <p>Logo</p>
        </div>

        <div className="navbar-body">
          <div className="admin-nav-group">
            <div className="admin-nav-title">
              <h4>DASHBOARD&APPS</h4>
            </div>

            <ul className="admin-nav-select-item">
              <li className="admin-listItem">
                <button>
                  <MdOutlineDashboard />
                  <span>Dashboard</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <GiVerticalBanner />
                  <span>Apps</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="admin-nav-group">
            <div className="admin-nav-title">
              <h4>COMPONENTS & UI</h4>
            </div>

            <ul className="admin-nav-select-item">
              <li className="admin-listItem">
                <button>
                  <span>UI Elements</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <CgUserList />
                  <span>Forms & Tables</span>
                </button>
              </li>
              <li className="admin-listItem">
                <button>
                  <BsFillPieChartFill />
                  <span>Charts</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="admin-nav-group">
            <div className="admin-nav-title">
              <h4>COLECTIONS</h4>
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
              <h4>LOGIN & ERROR</h4>
            </div>

            <ul className="admin-nav-select-item">
              <li className="admin-listItem">
                <button>
                  <BsFillShieldLockFill />
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
              <MdMail />
              <span>Email</span>
            </button>
          </div>
          <div className="admin-footer-item-nav">
            <button className="admin-nav-footer-button">
              <CgLogOut />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
