import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../context/Context'
import backendinfoandrankinguser from '../../../../apis/user-dashboard-backend-info-and-ranking'
import { useParams, useNavigate } from 'react-router-dom'
import './profileheading2.css'

const ProfileHeading2 = () => {
  const { userData } = useContext(Context);
  const [imageUrl, setImageUrl] = useState(""); 
  const { id } = useParams();
  const navigateTo = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await backendinfoandrankinguser.get(`/${id}`);
      console.log(response.data.datauseraccout);
      setImageUrl(response.data.datauseraccout.useraccoutinfo[0].ImageUserAccount);
    };

    fetchData();
  }, []);

  const handleUpdate = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/userdashboard/profile/${MaTaiKhoan}/edit`);
  };

  const handleLinkClick1 = (e, MaTaiKhoan) => {
    e.preventDefault();
    navigateTo(`/userdashboard/profile/${MaTaiKhoan}/info`);
  };
  const handleLinkClick2 = (e, MaTaiKhoan) => {
    e.preventDefault();
    navigateTo(`/userdashboard/profile/${MaTaiKhoan}/ranking`);
  };


  return (
    <div className='headingSection flex'>
      <div className="ImgContainer">
        <img src={imageUrl} alt="User Profile" />
      </div>

      <div className="NameAndSelectGroup grid">
        <h5>Đỗ Nhật Nam</h5>
        <h6>Vai trò: Khách hàng</h6>
        
        <div className="linkGp flex">
          <button         
            onClick={(e) => handleLinkClick1(e, userData.idUser)}
          >
            Thông tin
          </button>
          <button 
            className='active'
            onClick={(e) => handleLinkClick2(e, userData.idUser)}
          >
            Hội viên
          </button>
        </div>
      </div>

      <div className="edit-btn">
        <button className='btn'
        onClick={(e) => handleUpdate(e, userData.idUser)}>Edit Profile</button>
      </div>
    </div>
  )
}

export default ProfileHeading2