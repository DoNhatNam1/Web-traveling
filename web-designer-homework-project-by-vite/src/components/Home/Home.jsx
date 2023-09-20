import React ,{useState, useEffect, useContext } from 'react'
import './home.css'
import video2 from '../../assets/video(2).mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { SiZalo } from 'react-icons/si'
import { BsListTask} from'react-icons/bs'
import { FaGooglePlay} from'react-icons/fa'
import { TfiGoogle } from'react-icons/tfi'
import { IoSwapVertical } from "react-icons/io5";
import { Context } from '../../context/Context'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [value, setValue] = useState(5000000);
  const { 
    setSearchData, 
    setIsSearching, 
    setIsSearchingLoading 
  } = useContext(Context);



useEffect(() =>{
  Aos.init({
    duration: 2000
  })
}, [])

const handleChange = (e) => {
  const newValue = Number(e.target.value);
  setValue(newValue);
};

const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
});

const formattedValue = formatter.format(value);

const handleExchange = (e) => {
  e.preventDefault();
  setFromLocation(toLocation);
  setToLocation(fromLocation);
};

const handleSearch = (e) => {
  e.preventDefault();
  setIsSearching(true);
  setIsSearchingLoading(true);
  setTimeout(() => {
    setSearchData({
      fromLocation: fromLocation,
      toLocation: toLocation,
      departureDate: departureDate,
      maxPrice: value,
    });
    setIsSearchingLoading(false);
  }, 2000);
  
};

  return (
   
    <section className='home'>
      <div className="overlay"></div>
      <video src= {video2} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
          Đi đâu trong kỳ nghỉ tiếp theo ?
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
          Khám phá thế giới với chúng tôi!
          </h1>
        </div>
        <form onSubmit={handleSearch}>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Tìm địa điểm mà bạn muốn đến:</label>
            <div className="input flex">
              <input type="text" 
              placeholder='Điểm khởi hành....'
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              />
              <GrLocation className="icon" />
            </div>
            <div className="arrow flex">
              <button className = "switch-button" onClick={handleExchange}> <IoSwapVertical className="icon" /></button>
            </div>
            <div className="input flex">
              <input type="text" 
              placeholder='Điểm đến....' 
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              />
              <GrLocation className=" icon " />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Ngày khởi hành:</label>
            <div className="input flex">
              <input 
              type="date" 
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </div>
          
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Giá tối đa:</label>
              <h3 className="total">{formattedValue}</h3>
            </div>
            <div className="input flex">
            <input
        type="range"
        min="500000"
        max="10000000"
        step="500000"
        value={value}
        onChange={handleChange}
      />
            </div>
          </div>

          <button type="submit" className="searchButton">
          <div className="searchOptions flex">
          <HiFilter className="icon " />
            <span>SEARCH</span>
        </div>
          </button>
        </div>
        </form>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon " />
            <AiFillInstagram className="icon " />
            <SiZalo className="icon " />
            < TfiGoogle className="icon " />
          </div>

          <div className="leftIcons">
          <BsListTask className="icon " />
            <FaGooglePlay className="icon " />
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Home