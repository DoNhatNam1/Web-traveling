import React , { useState, useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './register.css'
import video from '../../assets/video-rain.mp4'
import logo from '../../assets/logo.jpg'
import { Context } from '../../context/Context'
import userAccountRegisterUrl from '../../apis/user-account-register-url'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Register = () => {
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigateTo = useNavigate()

  const { addUserAccounts } = useContext( Context )

  const createUser = async (e) => {
    e.preventDefault()
    try {
      const response = await userAccountRegisterUrl.post("/", {
        Email: email,
        UserName: userName,
        Pass: password
      });
      console.log(response.data.datauseraccout);
      addUserAccounts(response.data.datauseraccout.useraccout);
      navigateTo('/login');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='registerPage flex'>
        <div className="container-register flex">
            <div className="videoDiv">
              <video src={video} autoPlay muted loop></video>

              <div className="textDiv">
                <h2 className="title">Tự do làm điều mà bản thân muốn</h2>
                <p>Hãy cảm nhận vẻ đẹp thiên nhiên!</p>
              </div>

              <div className="footerDiv flex">
                <span className="text">Đã có tài khoản?</span>
                <Link to='/login'>
                <button className="btn-register">Đăng nhập</button>
                </Link>
              </div>
            </div>

            <div className="formDiv flex">
              <div className="headerDiv">
                <img src={logo} alt="Logo Image" />
                <h3>Hãy để chúng tôi biết bạn! </h3>
              </div>

              <form action='' className='form grid'>
  
                <div className="inputDiv">
                  <label htmlFor="email">Email</label>
                  <div className="input flex">
                    <MdEmail className='icon-register'/>
                    <input type="email" id='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
                  </div>
                </div>

                <div className="inputDiv">
                  <label htmlFor="username">Tài khoản</label>
                  <div className="input flex">
                    <FaUserShield className='icon-register'/>
                    <input type="text" id='username' placeholder='Enter Username' onChange={(e) => {setUserName(e.target.value)}}/>
                  </div>
                </div>

                <div className="inputDiv">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className='icon-register'/>
                    <input type="password" id='password' placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}/>
                  </div>
                </div>

                <button type='submit' className='btn-register flex' onClick={createUser}>
                  <span>Đăng ký</span>
                  <AiOutlineSwapRight className='icon-register'/>
                </button>

              </form>
            </div>

        </div>
    </div>

  )
}

export default Register