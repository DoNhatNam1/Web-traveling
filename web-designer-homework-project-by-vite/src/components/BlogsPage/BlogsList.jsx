import React, {useEffect} from 'react'
import img from '../../assets/travelpic/imgBlog1.jpg'
import img2 from '../../assets/travelpic/imgBlog2.jpg'
import img3 from '../../assets/travelpic/imgBlog3.jpg'
import Aos from 'aos'
import { useNavigate } from "react-router-dom";
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import 'aos/dist/aos.css'


  const BlogsList = () => {
    let navigate = useNavigate();

    useEffect(() =>{
      Aos.init({
        duration:2000
      })
    }, [])

    const DataBlog = [
        {
        id: 1,
        imgSrc: img,
        Date: '25/5/2020',
        Tieude: 'Những địa điểm du lịch quanh Hà Nội tốt nhất',
        GhiChu: 'Hà Nội là thành phố lịch sử với nhiều địa điểm du lịch hấp dẫn và đa dạng về kiến trúc, văn hóa và ẩm thực. Nếu bạn đến Hà Nội và muốn tận hưởng những trải nghiệm tuyệt vời thì không thể bỏ qua những địa điểm du lịch sau đây...'
      },
      
      {
        id: 2,
        imgSrc: img2,
        Date: '25/6/2020',
        Tieude: 'Top 5 mẹo giúp bạn lựa chọn địa điểm du lịch thú vị nhất tại Hà Nội ',
        GhiChu: 'Bạn đang băn khoăn không biết chọn địa điểm du lịch nào thú vị khi tới Hà Nội? Hãy cùng tìm hiểu top 5 mẹo giúp bạn lựa chọn địa điểm du lịch đáng nhớ tại thủ đô để mang đến cho chuyến du lịch của bạn sự phấn khích và đáng nhớ nhất!...'
      
      },
      
      {
        id: 3,
        imgSrc: img3,
        Date: '26/8/2020',
        Tieude: 'Tận dụng ẩm thực đường phố Hà Nội đến tận cùng với các mẹo đi du lịch của chúng tôi',
        GhiChu: 'Hà Nội với nền ẩm thực đặc trưng sẽ mang đến cho bạn những trải nghiệm tuyệt vời về đồ ăn và văn hóa. Hãy tận dụng tối đa cơ hội này để khám phá ẩm thực Hà Nội và nắm bắt những mẹo đi du lịch của chúng tôi để mang đến cho chuyến du lịch của bạn trọn vẹn và đầy đủ nhất...'
      
      },
      
      ]

    const handleBlogList = (e, id) => {
        e.stopPropagation();
        navigate(`/Blogs/${id}`);
      };
    
    return (
      <section className = 'main container section'>
        <div className="secTitle">
          <h4 data-aos="fade-right" className="title">
          BÀI BLOG MỚI NHẤT
          </h4>
        </div>
  
        <div className="secContent grid">
          {
          DataBlog.map(({id, imgSrc, Date, Tieude, GhiChu}) =>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={Tieude} />
                </div>
  
                <div className="cardInfo">
                  <h3 className="Tieude">
                  {Tieude}
                  </h3>
  
                  <div className="dates flex">
                    <div className="Date">
                      <span>{Date}</span>
                    </div>
                  </div>
  
                  <div className="GhiChu">
                    <p>{GhiChu}</p>
                  </div>
  
                  <button onClick={(e) => handleBlogList(e, id)}
                      className='btn flex'>
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

export default BlogsList