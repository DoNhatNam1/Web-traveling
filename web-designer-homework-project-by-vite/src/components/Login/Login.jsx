import React, {useEffect, useState, useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './login.css'
import video from '../../assets/video-rain.mp4'
import logo from '../../assets/logo.jpg'
import { Context } from '../../context/Context'
import userAccountRegisterUrl from '../../apis/user-account-register-url'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [hasFetched, setHasFetched] = useState(false);
  const { userAccounts, setUserAccounts } = useContext( Context )
  const navigateTo = useNavigate()
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')

  const fetchData = async () => {
    try {
      const response = await userAccountRegisterUrl.get("/")
      console.log(response.data.datauseraccout);
      setUserAccounts(response.data.datauseraccout.useraccouts);
      setHasFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hasFetched) {
    fetchData();
  }

  useEffect(() => {
    if(loginStatus !== ''){
      setStatusHolder('showMessage')
      setTimeout(() => {
        setStatusHolder('message')
      }, 4000);
    }
  }, [loginStatus])

  const loginUser = (e) => {
    e.preventDefault();
  
    let userAccount = userAccounts.find( user => 
      user.UserName === loginUserName && user.Pass === loginPassword
    );
  
    if (userAccount) {
      navigateTo('/dashboard');
    } else {
      setLoginStatus('Invalid UserName or Password');
      setLoginUserName('');
      setLoginPassword('');
      setTimeout(() => {
        setLoginStatus('');
      }, 4000);
      navigateTo('/login');
    }
  };



  return (
    <div className='loginPage flex'>
        <div className="container-login flex">
            <div className="videoDiv">
              <video src={video} autoPlay muted loop></video>

              <div className="textDiv">
                <h2 className="title">Tự do làm điều mà bản thân muốn</h2>
                <p>Hãy cảm nhận vẻ đẹp thiên nhiên!</p>
              </div>

              <div className="footerDiv flex">
                <span className="text">Bạn chưa có tài khoản?</span>
                <Link to='/register'>
                <button className="btn-login">Đăng ký</button>
                </Link>
              </div>
            </div>

            <div className="formDiv flex">
              <div className="headerDiv">
                <img src={logo} alt="Logo Image" />
                <h3>Chào mừng trở lại!</h3>
              </div>

              <form action='' className='form grid'>
                <span className={statusHolder}>{loginStatus}</span>
                <div className="inputDiv">
                  <label htmlFor="username">Tài khoản</label>
                  <div className="input flex">
                    <FaUserShield className='icon-login'/>
                    <input type="text" id='username' placeholder='Enter Username' onChange={(e) => {setLoginUserName(e.target.value)}}/>
                  </div>
                </div>

                <div className="inputDiv">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className='icon-login'/>
                    <input type="password" id='password' placeholder='Enter Password' onChange={(e) => {setLoginPassword(e.target.value)}}/>
                  </div>
                </div>

                <button type='submit' className='btn-login flex' onClick={loginUser}>
                  <span>Đăng nhập</span>
                  <AiOutlineSwapRight className='icon-login'/>
                </button>

                <span className='forgotPassword'>
                  Bạn quên mật khẩu? <Link to='#'>Nhấp vào đây</Link>
                </span>

              </form>
            </div>

        </div>
    </div>

  )
}

export default Login