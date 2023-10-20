import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/home/Navbar'
import Content from '../../components/home/Content'
import {useDispatch, useSelector} from 'react-redux';
import { isLogin } from '../../actions/userAction';
import { setActiveTab } from '../../actions/homeAction';


const PostPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {isLoginResult} = useSelector((state) => state.UserReducer)

  useEffect(() => {
    dispatch(isLogin())
  }, [isLoginResult, dispatch])

  useEffect(() => {
    dispatch(setActiveTab('Post'))
  }, [dispatch])

  return (
    <>
      {
        isLoginResult
        ? <div style={styles.container}>
            <Navbar />
            {/* <Content /> */}
          </div>  
        : navigate('/user/login')
      }
    </>
  );
};

export default PostPage;

const styles = {
  container: {
    height: '100vh',
    widht: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
};