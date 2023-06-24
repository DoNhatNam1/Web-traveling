import React, {useEffect} from 'react'
import img from '../../assets/travelpic/imgNew1.jpg'
import img2 from '../../assets/travelpic/imgNew2.jpg'
import img3 from '../../assets/travelpic/imgNew3.jpg'
import Aos from 'aos'
import { useNavigate } from "react-router-dom";
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import 'aos/dist/aos.css'


  const NewsList = () => {
    let navigate = useNavigate();

    useEffect(() =>{
      Aos.init({
        duration:2000
      })
    }, [])

    const DataNew = [
        {
        id: 1,
        imgSrc: img,
        Date: '25/5/2020',
        Tieude: 'Tăng cường giám sát và kiểm soát chặt chẽ các hoạt động du lịch trong thời gian dịch COVID-19',
        GhiChu: 'Bộ Văn hóa, Thể thao và Du lịch đã yêu cầu các địa phương trong mùa dịch Covid-19: Trong bối cảnh dịch bệnh vẫn đang diễn biến phức tạp, các cơ quan chức năng đang tăng cường việc giám sát và kiểm soát các hoạt động du lịch nhằm đảm bảo an toàn cho người dân và du khách. Ngoài việc yêu cầu các đơn vị kinh doanh du lịch tuân thủ các quy định phòng chống dịch, các nhà chức trách còn kiểm tra chặt chẽ hành trình, nơi lưu trú của du khách và tăng cường các biện pháp phòng ngừa dịch...'
      },
      
      {
        id: 2,
        imgSrc: img2,
        Date: '25/6/2020',
        Tieude: 'Phát triển mới và cơ hội phục hồi ngành du lịch ',
        GhiChu: 'Tuy bị ảnh hưởng nặng nề bởi dịch Covid-19, thị trường du lịch nội địa vẫn được coi là cơ hội để phục hồi ngành du lịch. Tờ Economic Times cho biết, nhiều địa điểm du lịch ở Ấn Độ và Thái Lan đang nhắm vào thị trường du lịch nội địa và triển khai nhiều chương trình khuyến mãi nhằm thu hút khách du lịch trong nước...'
      
      },
      
      {
        id: 3,
        imgSrc: img3,
        Date: '26/8/2020',
        Tieude: 'Các công ty du lịch nước ngoài trở lại Việt Nam sau đợt dịch Covid-19 đầu năm 2020',
        GhiChu: 'Sau khi dịch Covid-19 tạm được kiểm soát, nhiều công ty du lịch nước ngoài bắt đầu trở lại kinh doanh tại Việt Nam. Từ tháng 8/2020 đến nay, Việt Nam đã tiếp đón nhiều nhóm khách du lịch quốc tế đến tham quan các địa danh nổi tiếng và thực hiện các tour du lịch mới. Điều này cho thấy, ngành du lịch tại Việt Nam đang dần phục hồi lại và thu hút được sự quan tâm của các công ty du lịch quốc tế...'
      
      },
      
      ]

    const handleNewList = (e, id) => {
        e.stopPropagation();
        navigate(`/news/${id}`);
      };
    
    return (
      <section className = 'main container section'>
        <div className="secTitle">
          <h4 data-aos="fade-right" className="title">
          TIN TỨC MỚI NHẤT
          </h4>
        </div>
  
        <div className="secContent grid">
          {
          DataNew.map(({id, imgSrc, Date, Tieude, GhiChu}) =>{
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
  
                  <button onClick={(e) => handleNewList(e, id)}
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

export default NewsList