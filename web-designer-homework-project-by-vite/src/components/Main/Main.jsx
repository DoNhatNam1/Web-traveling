import React, {useEffect} from 'react'
import './main.css'
import imgDaLat from '../../assets/travelpic/imgDaLat.jpg'
import imgHaNoi from '../../assets/travelpic/imgHaNoi.jpg'
import imgHLCB from '../../assets/travelpic/imgHL-CB.jpg'
import imgHue from '../../assets/travelpic/imgHue.jpg'
import imgMeKong from '../../assets/travelpic/imgMeKong.jpg'
import imgNhaTrang from '../../assets/travelpic/imgNhaTrang.jpg'
import imgPhanThiet from '../../assets/travelpic/imgPhanThiet.jpg'
import imgPhuQuoc from '../../assets/travelpic/imgPhuQuoc.jpg'
import imgSapa from '../../assets/travelpic/imgSapa.jpg'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import { FiArrowRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
  MaChuyen: 1,
  imgSrc: imgDaLat,
  DonGia: 500000,
  tenDD: 'Vườn Hoa Đà Lạt',
  DiemDen: 'Đà Lạt',
  DiemKhoiHanh: 'Hà Nội',
  NgayKhoiHanh: '19-06-2023',
  GhiChu: 'Là thành phố nổi tiếng với khí hậu mát mẻ và nhiều quán cà phê lãng mạn và có phong cảnh thiên nhiên đẹp thiết tha, với các bông hoa đẹp mê ly với từng khách du lịch ghé qua.'
},

{
  MaChuyen: 2,
  imgSrc: imgHaNoi,
  DonGia: 1000000,
  tenDD: 'Động Phong Nha',
  DiemDen: 'Hà Nội',
  DiemKhoiHanh: 'HCM',
  NgayKhoiHanh: '20-06-2023',
  GhiChu: 'Là khu vực đá vôi đặc biệt với hệ thống hang động, đá sỏi và đá quặng, với các nhũ đá vôi tồn tại hàng nghìn năm càng làm tô thêm vẻ đẹp em dịu của chốn linh thiêng này...'

},

{
  MaChuyen: 3,
  imgSrc: imgHLCB,
  DonGia: 1500000,
  tenDD: 'Vịnh Hạ Long',
  DiemDen: 'Quảng Ninh',
  DiemKhoiHanh: 'Hà Nội',
  NgayKhoiHanh: '21-06-2023',
  GhiChu: 'Là một trong những danh thắng nổi tiếng của Việt Nam với hệ thống đảo đá ngầm được hình thành hàng triệu năm. Sử dụng các từ khóa như: Vịnh Hạ Long, đảo đá ngầm, du lịch Halong, để tối ưu hóa từ khóa và thu hút khách hàng quan tâm...'

},

{
  MaChuyen: 4,
  imgSrc: imgHue,
  DonGia: 2000000,
  tenDD: 'Cầu Bàn Tay Vàng',
  DiemDen: 'Đà Nẵng',
  DiemKhoiHanh: 'HCM',
  NgayKhoiHanh: '22-06-2023',
  GhiChu: 'Là thành phố cố đô nổi tiếng với các di tích lịch sử và kiến trúc cổ kính của các thời đại triều đình ngày xưa...'

},

{
  MaChuyen: 5,
  imgSrc: imgMeKong,
  DonGia: 2500000,
  tenDD: 'Miền Tây',
  DiemDen: 'Mê Kong',
  DiemKhoiHanh: 'HCM',
  NgayKhoiHanh: '22-06-2023',
  GhiChu: 'Là một vùng đồng bằng sông Cửu Long ở miền Nam Việt Nam nổi tiếng với các con sông, kênh rạch, vườn trái cây, đặc sản ẩm thực, cùng với các khu du lịch nổi tiếng như Cồn Phụng, Chợ Nổi Cái Bè, Vườn Trái Cây Cái Bè...'

},

{
  MaChuyen: 6,
  imgSrc: imgNhaTrang,
  DonGia: 5500000,
  tenDD: 'Vinpearl Land',
  DiemDen: 'Nha Trang',
  DiemKhoiHanh: 'HCM',
  NgayKhoiHanh: '23-06-2023',
  GhiChu: 'Là một trong những điểm đến du lịch hàng đầu ở Việt Nam với các bãi biển đẹp như Bãi Dài, Bãi Tranh, Bãi Tắm Nha Trang, Hòn Một, các đảo và các khu du lịch khác như Tháp Bà Ponagar, Chùa Long Sơn, Nhà thờ Đá, Vinpearl Land...'

},

{
  MaChuyen: 7,
  imgSrc: imgPhanThiet,
  DonGia: 6500000,
  tenDD: 'Mũi Né',
  DiemDen: 'Phan Thiết',
  DiemKhoiHanh: 'Hâ Nội',
  NgayKhoiHanh: '24-06-2023',
  GhiChu: 'Là một trong những bãi biển nổi tiếng tại Việt Nam với cát trắng, nắng vàng và các hoạt động vui chơi giải trí...'

},

{
  MaChuyen: 8,
  imgSrc: imgPhuQuoc,
  DonGia: 9000000,
  tenDD: 'Đảo Xanh Phú Quốc ',
  DiemDen: 'Phú Quốc',
  DiemKhoiHanh: 'HCM',
  NgayKhoiHanh: '25-06-2023',
  GhiChu: 'Là đảo lớn tại miền Nam Việt Nam với bờ biển trong xanh, cát trắng và rừng ngập mặn đầy màu sắc làm cho vẻ đẹp nơi đây rất cuốn hút, đặc biệt là với những khách du lịch lần đầu mới tới trong và ngoài nước...'

},

{
  MaChuyen: 9,
  imgSrc: imgSapa,
  DonGia: 1000000,
  tenDD: 'SaPa',
  DiemDen: 'Lào Cai',
  DiemKhoiHanh: 'Hà Nội',
  NgayKhoiHanh: '26-06-2023',
  GhiChu: 'Là một vùng núi cao nổi tiếng với phong cảnh đẹp và các bản làng dân tộc đặc trưng, bạn sẽ cảm thấy rất thích thú với bản chất lượng thiện của họ, đồng thời nơi đây các trò chơi thú vị của dân địa phương để khách có cảm giác vui vẻ khó quên bên gia đình và người thân...'

},
]

const Main = () => {

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
        Data.map(({MaChuyen, imgSrc, DonGia, tenDD, DiemDen, DiemKhoiHanh, NgayKhoiHanh, GhiChu}) =>{

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