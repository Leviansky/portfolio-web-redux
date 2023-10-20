import React, {useEffect,useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoginPage from '../user/LoginPage';
import Navbar from '../../components/home/Navbar'

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.getItem('access_token'))
    console.log(token)
    if(token !== null) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [token, isLogin])
  return (
    <>
      {
        !isLogin
        ? navigate('user/login')
        : <Navbar />
      }
    </>
  )
}

export default HomePage
