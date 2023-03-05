import React, {useEffect, useState} from 'react'
import  { Form, Input, Select, Button, Row, Col, Space, DatePicker, message} from 'antd';
import './formpage.css'
import { PackagesContext } from '../../context/PackagesContext'
import { useNavigate } from 'react-router-dom'
import backendUrl from '../../apis/backend-url'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const FormPage = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'BOOK SUCCESS!!, We will contact you soon.',
    });
  };
  
  
  const onFinish = (values) => {
    setTimeout(() =>{
      form.resetFields();
    }, 500);   
  };

useEffect(() =>{
  Aos.init({
    duration: 2000
  })
}, [])



//   const [tenKhach, setTenKhach] = useState("")
// const [dienThoai, setdienthoai] = useState()
// const { addPackages } = useContext(PackagesContext);
// let navigate = useNavigate();
// const createPost = async () => {
//   // e.preventDefault();
//   try {
//     const response = await backendUrl.post("/", {
//       tenkhach,
//       diachi,
//       dienthoai,
//     });
//     console.log(response.data.data);
//     addPackages(response.data.data.packages);
//   } catch (err) {
//     console.log(err);
//   }
// };
// useEffect(() => {
//   if(!packages) {
//     navigate("/")
//   }
// }, [])

  return (
    <>
    <Navbar />
    {contextHolder}
    <section className='createPostPage'>
      <div className='cpContainer'>
        <h1 data-aos="fade-up" className='sec-title-form'> PLEASE ENTER YOUR INFORMATION</h1>

        <Form onFinish={onFinish} form={form} className='inputGp'>

        <Form.Item className="input-item">
          <h3 className='third-title-form'><span>Personal Information</span></h3>

          <Row>
      <Col span={24}><Input placeholder='Name...'/></Col>
    </Row>
    <Row>
      <Col span={24}><Input placeholder='Phone Number...'/></Col>
    </Row>          
    <Row>
      <Col span={24}><Input placeholder='Address...'/></Col>
    </Row>
    <Row>
      <Col span={24}><textarea className='form-note' placeholder='Note...'/></Col>
    </Row>  
        
          </Form.Item> 

          <Form.Item className="input-item">
            <h3 className='third-title-form'><span>Package Information</span></h3>
            <Row>
      <Col span={24}><Select
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
      <Col span={24}><DatePicker placeholder='Date Sign Form...' className='date-time' onChange = {onChange} /></Col>
    </Row>
 </Form.Item> 
        <Space>
        <Button onClick={success} htmlType='submit' type='primary' className='btn'>BOOK</Button>
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