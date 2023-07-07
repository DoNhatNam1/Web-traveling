import React, { useContext, useEffect } from 'react'
import './userdashboard.css'
import { Context } from '../../../context/Context'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBarSection from '../SideBarSectionDashboard/SideBarSection';
import BodySection from './BodySectionMainDashboard/BodySection';

  const UserDashboard = () => {
      const { isLoggedIn, userData, logout, dashboardShowNLoginSuccess, setDashboardShowLoginSuccess } = useContext(Context); 

      const navigateTo = useNavigate()
          useEffect(() => {
            console.log(userData);
            console.log(isLoggedIn);
             if (!isLoggedIn && userData === null){
               logout();
               navigateTo('/login');
            }
          }, [isLoggedIn, userData, navigateTo]);

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
            </div>
          )}
            <ToastContainer />
        </>
      );
    }; 

export default UserDashboard;