import React, { useContext, useEffect } from 'react'
import './profileeditmain.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../context/Context'
import SideBarSection from '../../SideBarSectionDashboard/SideBarSection'
import ProfileEditBody from '../ProfileEditBody/ProfileEditBody'

const ProfileEditMain = () => {
    const { 
      isLoggedIn, 
      userData, 
      logout 
    } = useContext(Context); 

    const navigateTo = useNavigate()
        useEffect(() => {
          console.log(userData);
          console.log(isLoggedIn);
           if (!isLoggedIn && userData === null){
             logout();
             navigateTo('/login');
          }
        }, [isLoggedIn, userData, navigateTo]);
  return (
    <>
          {isLoggedIn && userData !== null && (
            <div className='container-dashboard'>
                <SideBarSection />
                <ProfileEditBody />
            </div>
          )}
        </>
  )
}

export default ProfileEditMain