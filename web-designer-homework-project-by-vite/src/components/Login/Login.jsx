import React, {useEffect, useState, useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import bcrypt from 'bcryptjs';
import './login.css'
import video from '../../assets/video-rain.mp4'
import logo from '../../assets/logo.jpg'
import { Context } from '../../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userAccountLoginUrl from '../../apis/user-account-login-url'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [hasFetched, setHasFetched] = useState(false);
  const { userAccounts, setUserAccounts, login, isLoggedIn, userData, registerStatus, setRegisterStatus } = useContext( Context )
  const navigateTo = useNavigate()
  const [loginStatus, setLoginStatus] = useState('Off')

  const fetchData = async () => {
    try {
      const response = await userAccountLoginUrl.get("/")
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
    if (isLoggedIn && userData !== null) {
      navigateTo(`/userdashboard/maindashboard/${userData.idUser}`);
    }
  }, [isLoggedIn, navigateTo]);

  useEffect(() => {
    if(loginStatus !== 'Off'){
      setTimeout(() => {
        toast.error('Invalid username or password!', {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, 1000);
    }
  }, [loginStatus])

  useEffect(() => {
    if(registerStatus === true){
      setRegisterStatus(false);

        toast.success('Register successful!', {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      
    }
  }, [registerStatus])

  const loginUser = (e) => {
    e.preventDefault();
    
    let matchUserAccount = userAccounts.find(account => bcrypt.compareSync(loginUserName, account.UserName) && bcrypt.compareSync(loginPassword, account.Pass));
    
    console.log(matchUserAccount);


    if (matchUserAccount){
      let USerAccount = {
        idUser: matchUserAccount.MaTaiKhoan,
        UserNameLogin: loginUserName
      };
      let isMatchUserName = bcrypt.compareSync(loginUserName, matchUserAccount.UserName);
      let isMatchPassword = bcrypt.compareSync(loginPassword, matchUserAccount.Pass);
      if (isMatchUserName && isMatchPassword) {
        login(USerAccount);
        navigateTo(`/userdashboard/maindashboard/${matchUserAccount.MaTaiKhoan}`);
      } else {
        setLoginStatus('On');
        setLoginUserName('');
        setLoginPassword('');
        setTimeout(() => {
          setLoginStatus('Off');
        }, 500);
        navigateTo('/login');
      }
    } else if (!matchUserAccount) {
      setLoginStatus('On');
        setLoginUserName('');
        setLoginPassword('');
        setTimeout(() => {
          setLoginStatus('Off');
        }, 500);
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
        <ToastContainer />
    </div>

  )
}

export default Login