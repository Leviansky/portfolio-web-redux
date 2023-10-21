import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/home/Navbar'
import {useDispatch, useSelector} from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';


const PostPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setActiveTab('Post'))
  }, [dispatch])

  return (
    <div style={styles.container}>
      <Navbar />
      {/* <Content /> */}
    </div>
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