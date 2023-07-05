import React, { useContext } from 'react'
import './sidebarsection.css'
import logo from '../../../assets/logo.jpg'
import { IoMdSpeedometer } from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'
import { Si1Password } from 'react-icons/si'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsQuestionCircle } from 'react-icons/bs'
import { MdOutlineLogout } from 'react-icons/md'
import { MdPayment } from 'react-icons/md'
import { Context } from '../../../context/Context'
import { useNavigate } from 'react-router-dom'

const SideBarSection = () => {
      const { logout } = useContext(Context); 
    const navigateTo = useNavigate()

    const handleLogout = () => {
        logout();
        navigateTo('/login');
      };

  return (
    <div className='sideBar grid-dashboard'>
        <div className="logoDiv flex">
           <img src={logo} alt="Image Name" />
           <h2>Travel.</h2> 
        </div>

        <div className="menuDivDashboard">
            <h3 className="divTitle">
                QUICK MENU
            </h3>
            <ul className="menuLists grid-dashboard">
                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <IoMdSpeedometer className = 'icon-dashboard'/>
                        <span className="smallText">
                            Dash board
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <IoTicketOutline className = 'icon-dashboard'/>
                        <span className="smallText">
                            Đơn đặt chỗ
                        </span>
                    </a>
                </li>  

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <AiOutlineStar className = 'icon-dashboard'/>
                        <span className="smallText">
                            Đánh giá của tôi 
                        </span>
                    </a>
                </li> 

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <AiOutlineHeart className = 'icon-dashboard'/>
                        <span className="smallText">
                            Yêu thích đã lưu
                        </span>
                    </a>
                </li>

            </ul>
        </div>

        <div className="settingsDiv">
            <h3 className="divTitle">
                SETTINGS
            </h3>
            <ul className="menuLists grid-dashboard">
                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <MdOutlinePermContactCalendar className = 'icon-dashboard'/>
                        <span className="smallText">
                            Thông tin cá nhân
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <Si1Password className = 'icon-dashboard'/>
                        <span className="smallText">
                            Đổi mật khẩu
                        </span>
                    </a>
                </li>  

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <MdPayment className = 'icon-dashboard'/>
                        <span className="smallText">
                            Lịch sử thanh toán
                        </span>
                    </a>
                </li> 

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <BiMailSend className = 'icon-dashboard'/>
                        <span className="smallText">
                            Yêu cầu xóa tài khoản
                        </span>
                    </a>
                </li> 

                <li className="listItem">
                    <button onClick={handleLogout} className='menuLink flex'>
                        <MdOutlineLogout className = 'icon-dashboard'/>
                        <span className="smallText">
                            Log out
                        </span>
                    </button>
                </li>

            </ul>
        </div>

        <div className="sideBarCard">
            <BsQuestionCircle className = 'icon-dashboard'/>
            <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>CƠ SỞ CSKH</h3>
                <p>Bạn gặp vấn đề tại website Travel.? Hãy liên lạc với chúng tôi để giải quyết vấn đề.</p>
                <button className="btn-dashboard">Đến trung tâm giúp đỡ</button>
            </div>
        </div>
    </div>
  )
}

export default SideBarSection