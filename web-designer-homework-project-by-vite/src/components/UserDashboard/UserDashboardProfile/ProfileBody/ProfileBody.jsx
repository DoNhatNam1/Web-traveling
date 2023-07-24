import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import backendinfoandrankinguser from '../../../../apis/user-dashboard-backend-info-and-ranking'
import './profilebody.css'

const ProfileBody = () => {
  const { id } = useParams();


    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [borned, setBorned] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        const response = await backendinfoandrankinguser.get(`/${id}`);
        console.log(response.data.datauseraccout);
        setName(response.data.datauseraccout.useraccoutinfo[0].HoVaTen);
        setAge(response.data.datauseraccout.useraccoutinfo[0].Tuoi);
        setPhone(response.data.datauseraccout.useraccoutinfo[0].Sdt);
        setBorned(response.data.datauseraccout.useraccoutinfo[0].QueQuan);
        setAddress(response.data.datauseraccout.useraccoutinfo[0].DiaChi);
      };
  
      fetchData();
    }, []);
  return (
    <>
    <div className='bodyProfileSection'>

      <div className="labelGp grid">
        <div className="labelItem flex">
          <div className="spanItem">
          <span>Họ và tên:</span>
          </div>
            <div className="PagrarphItem">
            <p>{name}</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Tuổi:</span>
          </div>
            <div className="PagrarphItem">
            <p>{age} tuổi</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Quê quán:</span>
          </div>
            <div className="PagrarphItem">
            <p>{borned}</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Số điện thoại:</span>
          </div>
            <div className="PagrarphItem">
            <p>{phone}</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Địa chỉ hiện tại:</span>
          </div>
            <div className="PagrarphItem">
            <p>{address}</p>
            </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ProfileBody