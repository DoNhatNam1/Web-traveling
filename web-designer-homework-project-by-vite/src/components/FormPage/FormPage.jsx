import React, { useState, useEffect, useContext } from 'react'
import  { Form, Input, Select, Button, Row, Col, Space, DatePicker, message} from 'antd';
import './formpage.css'
import { UsersContext } from '../../context/UsersContext'
import { useNavigate } from 'react-router-dom'
import backendUrls from '../../apis/backend-2-url'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


const FormPage = () => {
  // const [form] = Form.useForm();
  // const [messageApi, contextHolder] = message.useMessage();
  
  // const success = () => {
  //   messageApi.open({
  //     type: 'success',
  //     content: 'BOOK SUCCESS!!, We will contact you soon.',
  //   });
  // };
  


  const [tenkhach, setTenKhach] = useState("")
const [dienthoai, setDienThoai] = useState()
const [diachi, setDiaChi] = useState("")
// const [machuyen, setMaChuyen] = useState()
const [ngaydky, setNgayDangKy] = useState()
const [stdtra, setStdtra] = useState("")
const { addUsers } = useContext( UsersContext );
// let navigate = useNavigate();
const handleSubmit = async () => {
  // e.preventDefault();
  try {
    const response = await backendUrls.post("/", {
      tenkhach,
      dienthoai,
      diachi,
      // machuyen,
      ngaydky,
      stdtra,
    });
    console.log(response.data.data);
    addUsers(response.data.data.user);
  } catch (err) {
    console.log(err);
  }
};
// useEffect(() => {
//   if(!packages) {
//     navigate("/")
//   }
// }, [])

  return (
    <>
    <Navbar />
    {/* {contextHolder} */}
    <section className='createPostPage'>
      <div className='cpContainer grid'>
        <h1 data-aos="fade-up" className='sec-title-form'> PLEASE ENTER YOUR INFORMATION</h1>

        <Form className='inputGp grid'>

        <Form.Item className="input-item">
          <h3 className='third-title-form'><span>Personal Information</span></h3>

          <Row>
      <Col span={24}><Input 
      value={tenkhach}
              onChange={(e) => setTenKhach(e.target.value)}
              type="text"
      placeholder='Name...'
      />
      </Col>
    </Row>
    <Row>
      <Col span={24}><Input 
      value={stdtra}
              onChange={(e) => setStdtra(e.target.value)}
              type="text"
      placeholder='Money EXAMPLE: $100...'
      />
      </Col>
    </Row>
    <Row>
      <Col span={24}><Input 
            value={dienthoai}
              onChange={(e) => setDienThoai(e.target.value)}
              type="text"
      placeholder='Phone Number...'
      />
      </Col>
    </Row>          
    <Row>
      <Col span={24}><Input 
            value={diachi}
              onChange={(e) => setDiaChi(e.target.value)}
              type="text"
      placeholder='Address...'
      />
      </Col>
    </Row>
    {/* <Row>
      <Col span={24}><textarea 
            value={tenkhach}
              onChange={(e) => setTenTinhThanh(e.target.value)}
              type="text"
      className='form-note' placeholder='Note...'
      />
      </Col>
    </Row>   */}
        
          </Form.Item> 

          <Form.Item className="input-item">
            <h3 className='third-title-form'><span>Package Information</span></h3>
            <Row>
      <Col span={24}><Select
            // value={machuyen}
              // onChange={(e) => setMaChuyen(e.target.value)}
              type="text"
    showSearch
    className='Selected-packages'
    placeholder="Search your Package Information..."
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  /></Col>
    </Row>
    <Row>
      <Col span={24}><Input 
            value={ngaydky}
              onChange={(e) => setNgayDangKy(e.target.value)}
              type="text"
      placeholder='Date Sign Form...' className='date-time' 
      />
      </Col>
    </Row>
 </Form.Item> 
        <Space className='btn-gp flex'>
        <Button 
         onClick={handleSubmit} htmlType='submit' type='primary' className='btn'>BOOK</Button>
          <Button className='btn'>RESET FORM</Button>
        </Space>
        </Form>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default FormPage