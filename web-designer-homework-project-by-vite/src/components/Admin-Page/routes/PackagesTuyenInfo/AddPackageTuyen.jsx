import React,{useState, useContext} from 'react'
import backendUrl from '../../../../apis/backend-url'
import  { Form, Input, Select, Button, Row, Col, Space, DatePicker, message} from 'antd';
import { Context } from '../../../../context/Context';
import '../../../FormPage/formpage.css'
import { useNavigate } from 'react-router-dom';



const AddPackageTuyen = () => {
    const { addUsers } = useContext( Context );
    let navigate = useNavigate();
  const [TenKhach, setTenKhach] = useState("");
  const [DienThoai, setDienThoai] = useState("");
  const [DiaChi, setDiaChi] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await backendUrl.post("/", {
        TenKhach,
        DienThoai,
        DiaChi,
      });
      navigate("/admin/user");
      console.log(response.data.data);
      addUsers(response.data.data.user);
    } catch (err) {
      console.log(err);
    }
};
  return (
    <section className='createPostPage'>
    <div className='cpContainer grid'>
      <h1 data-aos="fade-up" className='sec-title-form'> PLEASE ENTER YOUR INFORMATION</h1>

      <Form className='inputGp grid'>

      <Form.Item className="input-item">
        <h3 className='third-title-form'><span>Personal Information</span></h3>

        <Row>
    <Col span={24}><Input 
    value={TenKhach}
            onChange={(e) => setTenKhach(e.target.value)}
            type="text"
    placeholder='Name...'
    />
    </Col>
  </Row>
  <Row>
    <Col span={24}><Input 
    value={DiaChi}
            onChange={(e) => setStdtra(e.target.value)}
            type="text"
    placeholder='Money EXAMPLE: 100...'
    />
    </Col>
  </Row>
  <Row>
    <Col span={24}><Input 
          value={DienThoai}
            onChange={(e) => setDienThoai(e.target.value)}
            type="text"
    placeholder='Phone Number...'
    />
    </Col>
  </Row>          
  <Row>
    <Col span={24}><Input 
          value={DiaChi}
            onChange={(e) => setDiaChi(e.target.value)}
            type="text"
    placeholder='Address...'
    />
    </Col>
  </Row>
</Form.Item> 
      <Space className='btn-gp flex'>
      <Button 
       onClick={handleSubmit} htmlType='submit' type='primary' className='btn'>ADD USER</Button>
        <Button className='btn'>RESET</Button>
      </Space>
      </Form>
    </div>
  </section>
  );
};
  


export default AddPackageTuyen