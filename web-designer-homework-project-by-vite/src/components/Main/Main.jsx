import React, {useState, useEffect, useContext} from 'react'
import backendPackagesUrl from '../../apis/package-most-famous-url';
import { Context } from '../../context/Context'
import './main.css'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import { FiArrowRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Main = () => {
  const { packages, setPackages } = useContext( Context );
  const [hasFetched, setHasFetched] = useState(false);


  const fetchData = async () => {
    try {
      const response = await backendPackagesUrl.get("/");
      console.log(response.data.datapackage);
      setPackages(response.data.datapackage.packages);
      setHasFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hasFetched) {
    fetchData();
  }

  useEffect(() =>{
    Aos.init({
      duration:2000
    })
  }, [])

  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  });
  

  
  return (
    <section className = 'main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
        Phổ biến nhất:
        </h3>
      </div>

      <div className="secContent grid">
        {
        packages.map(({MaChuyen, imgSrc, DonGia, tenDD, DiemDen, DiemKhoiHanh, NgayKhoiHanh, GhiChu}) =>{

          const formattedValue = formatter.format(DonGia);
          return(
            <div key={MaChuyen} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={tenDD} />
              </div>

              <div className="cardInfo">
                <h4 className="tenDD">
                {tenDD}
                </h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{DiemKhoiHanh}</span>
                  <FiArrowRight className='icon'/>
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{DiemDen}</span>
                </span>

                <div className="fees flex">

                  <div className="NgayKhoiHanh">
                    <span> Ngày đi: {NgayKhoiHanh}</span>
                  </div>

                  <div className="price">
                    <h5>{formattedValue}</h5>
                  </div>
                </div>

                <div className="GhiChu">
                  <p>{GhiChu}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className='icon' />
                </button>
              </div>
            </div>
          )
        })
        }
      </div>
    </section>
  )
}

export default Main