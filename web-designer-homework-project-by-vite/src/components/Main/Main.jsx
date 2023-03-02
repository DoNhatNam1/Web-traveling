import React, {useEffect} from 'react'
import './main.css'
import img from '../../assets/img(1).jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
  MaChuyen: 1,
  imgSrc: img,
  PhuongTien: 'xe giuong nam 50 cho',
  TenHDVien: 'MR dep trai',
  DonGia: '$800',
  tenDD: 'Vinh Ha Long',
  TenTinhThanh: 'Quang Ninh',
  TenTuyen: 'TUYEN ABC',
  SoNgay: 5,
  GhiChu: 'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
},

{
  MaChuyen: 2,
  imgSrc: img2,
  PhuongTien: 'xe giuong nam 25 cho',
  TenHDVien: "MRS xinh dep",
  DonGia: '$420',
  tenDD: 'Pho di bo',
  TenTinhThanh: 'Ha Noi',
  TenTuyen: 'TUYEN XYZ',
  SoNgay: 8,
  GhiChu: 'Hoan Kiem Lake Walking Street is bustling at weekends (collected photos) To serve people who come to visit and have fun in the pedestrian street, the Hanoi People Committee has established 78 parking spots.'

},

{
  MaChuyen: 3,
  imgSrc: img3,
  PhuongTien: 'xe Hoa mai',
  TenHDVien: "MR khoe manh",
  DonGia: '$200',
  tenDD: 'Bach Dinh',
  TenTinhThanh: 'Vung Tau',
  TenTuyen: 'TUYEN CHEAPER',
  SoNgay: 2,
  GhiChu: 'Bach Dinh relic site in Vung Tau. Bach Dinh is named after the French name Villa Blanche which means white villa, located on the big mountainside of Vung Tau city.'

},

{
  MaChuyen: 4,
  imgSrc: img4,
  PhuongTien: 'may bay',
  TenHDVien: "Jack The Ripper",
  DonGia: '$960',
  tenDD: 'Ho Guom',
  TenTinhThanh: 'Ha Noi',
  TenTuyen: 'TUYEN DANGEROUSLY',
  SoNgay: 4,
  GhiChu: 'Sword Lake (also known as Hoan Kiem Lake) is the heart of Hanoi. This is not only a place for people to relax, but also associated with the people of the capital in many historical aspects.'

},

{
  MaChuyen: 5,
  imgSrc: img5,
  PhuongTien: 'tau ngam',
  TenHDVien: "Aquaman",
  DonGia: '$840',
  tenDD: 'Bai Dau',
  TenTinhThanh: 'Vung Tau',
  TenTuyen: 'TUYEN DIVING',
  SoNgay: 2,
  GhiChu: 'Coming to Vung Tau Strawberry Beach, it is not only finding in the coastal nature here a peaceful, gentle sea to relax and rest but also attractive with religious architectural works.'

},

{
  MaChuyen: 6,
  imgSrc: img6,
  PhuongTien: 'du thuyen',
  TenHDVien: "MR Rich Man",
  DonGia: '$1000',
  tenDD: 'Alaska',
  TenTinhThanh: 'USA',
  TenTuyen: 'TUYEN HAVEMONEY',
  SoNgay: 9,
  GhiChu: 'From scenic flights and glacier walks to white water rafting trips, Alaska offers endless possibilities for adventure. Explore the snow-capped mountains in Denali National Park, watch the whimsical Northern Lights dance above Fairbanks, or visit Point Woronz of to see incredible wildlife such as bald eagles, moose, and perhaps even beluga whales. After your first visit to the Last Frontier, you ll find yourself happily returning again and again.'

},

{
  MaChuyen: 7,
  imgSrc: img7,
  PhuongTien: 'xe limo',
  TenHDVien: "MR dep trai",
  DonGia: '$970',
  tenDD: 'East Coast',
  TenTinhThanh: 'USA',
  TenTuyen: 'TUYEN SUPERELAX',
  SoNgay: 5,
  GhiChu: 'Explore Florida warm sandy beaches, the bustling streets of New York City, and taste iconic local cuisine everywhere from Maine to North Carolina. Discover everything the East Coast of America has to offer on one of our 100 tours. We can help you find the best time to visit the East Coast or West Coast, or even both.'

},

{
  MaChuyen: 8,
  imgSrc: img8,
  PhuongTien: 'xe Tour',
  TenHDVien: "MR xau trai",
  DonGia: '$340',
  tenDD: 'Hawaii',
  TenTinhThanh: 'USA',
  TenTuyen: 'TUYEN NORMAL',
  SoNgay: 3,
  GhiChu: 'Crystal clear swells create idyllic surfing spots, helicopter rides offer sky-high views of active volcanoes, and crisp-green jungles contrast with some of the best beaches in the world. Its not hard to see why these islands are deservedly named the Paradise of the Pacific. Whether you relax in a 5-star resort in Honolulu or head underwater in search of marine life in Maui, there no shortage of amazing adventures in Hawaii.'

},

{
  MaChuyen: 9,
  imgSrc: img9,
  PhuongTien: 'may bay',
  TenHDVien: "MR Hittle",
  DonGia: '$1140',
  tenDD: 'California',
  TenTinhThanh: 'USA',
  TenTuyen: 'TUYEN FOR SUPERRICHES',
  SoNgay: 2,
  GhiChu: 'From the illuminated sunset strip of Las Vegas and the cactus-filled plains of Joshua Tree to the bright red bridge that dominates San Francisco and California Disneyland where dreams come true. The West Coast of the USA is a paradise offering a range of adventures for the whole family no matter what time of year. Embark on a cruise to Alaska or opt for some time out in Yosemite, the possibilities are endless on a vacation America West Coast.'

},
]

const Main = () => {

  useEffect(() =>{
    Aos.init({
      duration:2000
    })
  }, [])
  
  return (
    <section className = 'main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
        Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
        Data.map(({MaChuyen, imgSrc, PhuongTien, TenHDVien, DonGia, tenDD, TenTinhThanh, TenTuyen, SoNgay, GhiChu}) =>{
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
                  <span className="name">{TenTinhThanh}</span>
                </span>

                <div className="fees flex">
                  <div className="TenTuyen">
                    <span>{TenTuyen}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{DonGia}</h5>
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