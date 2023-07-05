import React, { useContext, useEffect } from 'react'
import './dashboard.css'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBarSection from './SideBarSectionDashboard/SideBarSection';
import BodySection from './BodySectionDashboard/BodySection';

  const Dashboard = () => {
      const { isLoggedIn, userData, logout, dashboardShowNLoginSuccess, setDashboardShowLoginSuccess } = useContext(Context); 
      const navigateTo = useNavigate()
          useEffect(() => {
            if (!isLoggedIn || userData === null) {
              logout();
              navigateTo('/login');
            }
          }, []);

          const handleLogout = () => {
            logout();
            navigateTo('/login');
          };

          useEffect(() => {
            if(dashboardShowNLoginSuccess === true){
              setDashboardShowLoginSuccess(false);
                toast.success('Login successful!', {
                  position: "bottom-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              
            }
          }, [dashboardShowNLoginSuccess])


      return (
        <>
          {isLoggedIn && userData !== null && (
            <div className='container-dashboard'>
                <SideBarSection />
                <BodySection />
                {/* <button onClick={handleLogout}>Log Out</button> */}
            </div>
          )}
            <ToastContainer />
        </>
      );
    }; 

export default Dashboard;