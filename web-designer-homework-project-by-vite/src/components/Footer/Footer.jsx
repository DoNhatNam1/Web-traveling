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
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not only five 
            centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged.
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
                <FiChevronRight className="icon" />Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Payment
              </li>

            </div>

                  {/* second group */}
                  <div data-aos="fade-up" data-aos-duration="4000"className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />TriAdvisor
              </li>

            </div>

                  {/* third group */}
                  <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />USA
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />VietNam
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Korea
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />Philippine
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