import React, { useContext, useEffect, useState } from 'react'
import './searchhome.css'
import img from '../../assets/travelpic/route-no-schedule.png'
import { BarLoader } from 'react-spinners';
import backendPackagesSearchUrl from '../../apis/package-searching-menu';
import { Context } from '../../context/Context'
import moment from 'moment'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import { FiArrowRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const SearchHomePage = () => {
    const { searchData, isSearching, isSearchingLoading, packages, setPackages } = useContext(Context);
    const [searchResults, setSearchResults] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);


      const fetchData = async () => {
          try {
              const response = await backendPackagesSearchUrl.get("/");
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
          duration: 2000
        })
      }, [])

    useEffect(() => {
      if (isSearching && searchData.fromLocation && searchData.toLocation && searchData.departureDate && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            String(packages.DiemKhoiHanh).toLowerCase().indexOf(String(searchData.fromLocation).trim().toLowerCase()) !== -1 &&
            String(packages.DiemDen).toLowerCase().indexOf(String(searchData.toLocation).trim().toLowerCase()) !== -1 &&
            packages.NgayKhoiHanh === moment(searchData.departureDate, 'YYYY-MM-DD').format('DD/MM/YYYY') &&
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
      } else if (isSearching && searchData.fromLocation && searchData.toLocation && searchData.departureDate === '' && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            String(packages.DiemKhoiHanh).toLowerCase().indexOf(String(searchData.fromLocation).trim().toLowerCase()) !== -1 &&
            String(packages.DiemDen).toLowerCase().indexOf(String(searchData.toLocation).trim().toLowerCase()) !== -1 &&
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
        console.log(searchResults);
      }  else if (isSearching && searchData.fromLocation === '' && searchData.toLocation && searchData.departureDate && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            String(packages.DiemDen).toLowerCase().indexOf(String(searchData.toLocation).trim().toLowerCase()) !== -1 &&
            packages.NgayKhoiHanh === moment(searchData.departureDate, 'YYYY-MM-DD').format('DD/MM/YYYY') &&
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
        console.log(searchResults);
      }  else if (isSearching && searchData.fromLocation && searchData.toLocation === '' && searchData.departureDate  && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            String(packages.DiemKhoiHanh).toLowerCase().indexOf(String(searchData.fromLocation).trim().toLowerCase()) !== -1 &&
            packages.NgayKhoiHanh === moment(searchData.departureDate, 'YYYY-MM-DD').format('DD/MM/YYYY') &&
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
        console.log(searchResults);
      } else if (isSearching && searchData.fromLocation === '' && searchData.toLocation === '' && searchData.departureDate  && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            packages.NgayKhoiHanh === moment(searchData.departureDate, 'YYYY-MM-DD').format('DD/MM/YYYY') &&
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
        console.log(searchResults);
      } else if (isSearching && searchData.fromLocation && searchData.toLocation === '' && searchData.departureDate === '' && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            String(packages.DiemKhoiHanh).toLowerCase().indexOf(String(searchData.fromLocation).trim().toLowerCase()) !== -1 &&
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
        console.log(searchResults);
      } else if (isSearching && searchData.fromLocation === '' && searchData.toLocation && searchData.departureDate === '' && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            String(packages.DiemKhoiHanh).toLowerCase().indexOf(String(searchData.fromLocation).trim().toLowerCase()) !== -1 &&
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
        console.log(searchResults);
      } else if (isSearching && searchData.fromLocation === '' && searchData.toLocation === '' && searchData.departureDate === '' && searchData.maxPrice) {
        console.log(packages)
        console.log(searchData)
        const filteredResults = packages.filter((packages) => {
          return (
            packages.DonGia <= searchData.maxPrice + 500000 &&
            packages.DonGia >= searchData.maxPrice - 500000
          );
        });
        console.log(filteredResults);
        setSearchResults(filteredResults);
        console.log(searchResults);
      }
    }, [isSearching, searchData]);

      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      });
      return (
        <>
          {isSearchingLoading ? (
            <div className="loader-container">
              <BarLoader color="#2390f9" />
              <h2>Đang tìm kiếm...</h2>
            </div>
          ) : (
            searchResults.length === 0 ? ( 
              isSearching && (
              <section className = 'main container section'>
              <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Kết quả tìm kiếm của bạn:
                </h3>
                </div>
              <div className="secTitle-search-fail">
                <h4 data-aos="fade-right" className="title-search-fail">
              Không tìm thấy kết quả phù hợp.
                </h4>
                <div className="smalltitleText">
                  <p>Xin vui lòng tìm vé với thông tin cần tìm khác</p>
                </div>
                
                <div className="imgNotFoundsearch">
                <img src={img} alt="Not founding" />
                </div>

              </div>
              </section>
            )) : (
              isSearching && (
      <section className = 'main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
        Kết quả tìm kiếm của bạn:
          </h3>
        </div>

        <div className="secContent grid">
          {
          searchResults.map(({MaChuyen, imgSrc, DonGia, tenDD, DiemDen, DiemKhoiHanh, NgayKhoiHanh, GhiChu}) =>{
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

                    <div className="DiemKhoiHanh">
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
            )) 
          ) 
          }
        </>
      );
}

export default SearchHomePage