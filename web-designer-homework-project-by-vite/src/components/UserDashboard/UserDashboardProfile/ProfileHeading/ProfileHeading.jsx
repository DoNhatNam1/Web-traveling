import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './profileheading.css'
import img from '../../../../assets/admin-img.jpg'

const ProfileHeading = () => {
  const [activeLink, setActiveLink] = useState('About');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className='headingSection flex'>
      <div className="ImgContainer">
        <img src={img} alt="User Profile" />
      </div>

      <div className="NameAndSeclectGroup grid">
        <h5>Đỗ Nhật Nam</h5>
        <h6>Vai trò: Khách hàng</h6>
        
        <div className="linkGp flex">
          <Link
            to='/userdashboard/profile/info/'
            className={activeLink === 'About' ? 'active' : ''}
            onClick={() => handleLinkClick('About')}
          >
            Thông tin
          </Link>
          <Link
             to='/userdashboard/profile/info/##/'
            className={activeLink === 'TimeLink' ? 'active' : ''}
            onClick={() => handleLinkClick('TimeLink')}
          >
            Hội viên
          </Link>
        </div>
      </div>

      <div className="edit-btn">
        <button className='btn'>Edit Profile</button>
      </div>
    </div>
  )
}

export default ProfileHeading