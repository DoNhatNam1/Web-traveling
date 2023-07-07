import React from 'react'
import './userprofilemain.css'
import ProfileHeading from '../ProfileHeading/ProfileHeading'
import ProFileBody from '../ProfileBody/ProfileBody'

const UserProfileMain = () => {
  return (
     <div className='mainContent'>
      <form className='form-group'>
        <ProfileHeading/>

        <div className="bottom flex">
            <ProFileBody />
        </div>
    </form>
    </div>
  )
}

export default UserProfileMain