import React, {useEffect} from 'react'
import './footer.css'
import video3 from '../../assets/video(3).mp4'
import {FiSend} from 'react-icons/fi'
import { SiYourtraveldottv } from 'react-icons/si'
import {SiDiscord} from 'react-icons/si'
import {FiChevronRight} from 'react-icons/fi'
import {BsTwitter, BsYoutube, BsInstagram} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video3} muted autoPlay loop type="video/mp4" />
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address..." />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
               <SiYourtraveldottv className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Chúng tôi cam kết mang đến cho bạn những trải nghiệm du lịch tuyệt vời nhất. 
            Với đội ngũ nhân viên giàu kinh nghiệm, chúng tôi luôn sẵn lòng tư vấn và hỗ trợ 
            bạn trong suốt hành trình khám phá thế giới. Hãy liên hệ với chúng tôi ngay và trải nghiệm
            những chuyến đi đáng nhớ nhất trong cuộc đời!
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <BsTwitter className="icon" />
              <BsYoutube className="icon" />
              <BsInstagram className="icon" />
              <SiDiscord className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">

                  {/* first group */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Dịch vụ
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Đội ngũ chuyên gia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Mô Hình Kinh Doanh
              </li>

            </div>

                  {/* second group */}
                  <div data-aos="fade-up" data-aos-duration="4000"className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Đối tác
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Thuê xe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Lữ quán
              </li>

            </div>

                  {/* third group */}
                  <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Những chuyến đi giá rẻ
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Tour trọn gói
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Chỗ còn trống
              </li>


            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT © 2023 | MADE BY NAM IT</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer