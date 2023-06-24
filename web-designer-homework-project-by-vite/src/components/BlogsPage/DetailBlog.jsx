import React from 'react'
import { useParams } from 'react-router-dom';
import imgChuaMotCot from '../../assets/travelpic/DetailBlog1/imgChuaMotCot.jpg'
import imgHoanhThanhThangLong from '../../assets/travelpic/DetailBlog1/imgHoanhThanhThangLong.jpg'
import imgHoHoanKiem from '../../assets/travelpic/DetailBlog1/imgHoHoanKiem.jpg'
import imgPhoCoHaNoi from '../../assets/travelpic/DetailBlog1/imgPhoCoHaNoi.jpg'
import imgVanMieuQuocTuGiam from '../../assets/travelpic/DetailBlog1/imgVanMieuQuocTuGiam.jpg'
const DetailBlog = (props) => {

  const { id } = useParams();
  
  const DetailData = [
    {
      id: 1,
      imgblog1: imgHoanhThanhThangLong,
      imgblog2: imgChuaMotCot,
      imgblog3: imgVanMieuQuocTuGiam,
      imgblog4: imgHoHoanKiem,
      imgblog5: imgPhoCoHaNoi,
      TitleMain: 'Những địa điểm du lịch quanh Hà Nội tốt nhất',
      Title1: '1. Hoàng thành Thăng Long: ',
      Title2: '2. Chùa Một Cột:',
      Title3: '3. Văn Miếu - Quốc Tử Giám: ',
      Title4: '4. Hồ Hoàn Kiếm: ',
      Title5: '5. Phố cổ Hà Nội: ',
      ContentMain: 'Hà Nội là thủ đô của Việt Nam, là một trong những thành phố lớn nhất Đông Nam Á và đang thu hút rất nhiều du khách từ khắp nơi trên thế giới. Với nét đẹp nổi tiếng của mất Đông Nam Á. Với hơn 1000 năm lịch sử và văn hóa đa dạng, Hà Nội được xem là một điểm đến hấp dẫn cho du khách trong và ngoài nước. Nếu bạn đang lên kế hoạch du lịch gần Hà Nội, thì đừng quên ghé qua những địa điểm du lịch sau đây:',
      Content1: 'Đây là di tích lịch sử quan trọng của Hà Nội, được UNESCO công nhận là Di sản Văn hóa Thế giới. Hoàng thành Thăng Long được xây dựng từ thế kỷ thứ 11 và đóng vai trò là nơi ở của các vua triều đại Lý, Trần, Lê và Nguyễn.',
      Content2: 'Là biểu tượng của Hà Nội, chùa Một Cột xây dựng vào thế kỷ thứ 11 và là nơi thờ cúng bổn sư Thích Ca Mâu Ni. Kiến trúc của chùa được thiết kế theo hình dáng của một cây liễu đang nảy lộc.',
      Content3: 'Là ngôi trường đại học đầu tiên của Việt Nam, Văn Miếu - Quốc Tử Giám được xây dựng từ thế kỷ thứ 11 và là nơi truyền thống để tôn vinh các vị sư phụ, giáo sư và các học giả.',
      Content4: 'Được coi là trái tim của Hà Nội, Hồ Hoàn Kiếm là nơi du khách thích hợp để thư giãn và tham gia các hoạt động vui chơi giải trí. Các điểm đến thú vị khác ở hồ Hoàn Kiếm bao gồm Ngọc Sơn Temple và Tháp Rùa.',
      Content5: 'Là nơi tập trung của các ngôi nhà cổ và hàng rong được bày bán trên những con phố nhỏ. Đây là nơi để khám phá về văn hóa và ẩm thực đặc trưng của Hà Nội.'
      
  },

  {
    id: 2,
    imgblog1: '',
    imgblog2: '',
    imgblog3: '',
    imgblog4: '',
    imgblog5: '',
    TitleMain: '',
    Title1: 'Hello',
    Title2: 'Hello',
    Title3: 'Hello',
    Title4: 'Hello',
    Title5: 'Hello',
      ContentMain: 'Dummy content 1',
      Content1: 'Dummy content 1',
      Content2: 'Dummy content 1',
      Content3: 'Dummy content 1',
      Content4: 'Dummy content 1',
      Content5: 'Dummy content 1'
  },

  {
    id: 3,
    imgblog1: '',
    imgblog2: '',
    imgblog3: '',
    imgblog4: '',
    imgblog5: '',
    TitleMain: '',
    Title1: 'Hello',
    Title2: 'Hello',
    Title3: 'Hello',
    Title4: 'Hello',
    Title5: 'Hello',
      ContentMain: 'Dummy content 1',
      Content1: 'Dummy content 1',
      Content2: 'Dummy content 1',
      Content3: 'Dummy content 1',
      Content4: 'Dummy content 1',
      Content5: 'Dummy content 1'
  },
]

const resulteachData = DetailData.find((resulteachData) => resulteachData.id === parseInt(id));
  return (
    <section className='main container section'>
        <div className='blog-container'>
        <h1 className='blog-title'>{resulteachData.TitleMain}</h1>
        <p className='blog-p'>{resulteachData.ContentMain}</p>
        <br/>
        <h4 className='blog-second-title'>{resulteachData.Title1}</h4>
        <img src={resulteachData.imgblog1} alt= {resulteachData.Title1}/>
        <p className='blog-p'>{resulteachData.Content1}</p>
        <br/>
        <h4 className='blog-second-title'>{resulteachData.Title2}</h4>
        <img src={resulteachData.imgblog2} alt= {resulteachData.Title2}/>
        <p className='blog-p'>{resulteachData.Content2}</p>
        <br/>
        <h4 className='blog-second-title'>{resulteachData.Title3}</h4>
        <img src={resulteachData.imgblog3} alt= {resulteachData.Title3}/>
        <p className='blog-p'>{resulteachData.Content3}</p>
        <br/>
        <h4 className='blog-second-title'>{resulteachData.Title4}</h4>
        <img src={resulteachData.imgblog4} alt= {resulteachData.Title4}/>
        <p className='blog-p'>{resulteachData.Content4}</p>
        <br/>
        <h4 className='blog-second-title'>{resulteachData.Title5}</h4>
        <img src={resulteachData.imgblog5} alt= {resulteachData.Title5}/>
        <p className='blog-p'>{resulteachData.Content5}</p>
        <br/>
        </div>
    </section>
  )
}

export default DetailBlog