import React, {useEffect,useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoginPage from '../user/LoginPage';
import Navbar from '../../components/home/Navbar'
import Content from '../../components/home/Content'
import {useDispatch, useSelector} from 'react-redux';
import { getPosteds } from '../../actions/postAction';
import { isLogin } from '../../actions/userAction';


const HomePage = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const {getPostedResult, getPostedLoading, getPostedError} = useSelector((state) => state.PostReducer)
  const {isLoginResult} = useSelector((state) => state.UserReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isLogin())
    console.log("cari token di home");
  }, [isLoginResult, dispatch])

  useEffect(() => {
    dispatch(getPosteds())
    console.log("cek posting");
    console.log(getPostedResult);
  }, [dispatch])

  return (
    <>
      {
        isLoginResult
        ? <div style={styles.container}>
            <Navbar />
            <div style={styles.content}>
              <h1 style={styles.posts}>Posts</h1>
              <h3 style={styles.overview}>Post overview</h3>
              <div style={styles.cardContainer}>
                {
                  getPostedResult
                  ? getPostedResult.map((post) => {
                    return <div key={post.id} style={styles.card}>
                              <div style={styles.imageContainer}>
                                <img src={post.image} alt="card" style={styles.image} />
                              </div>
                              <div style={styles.posterInfo}>
                                <span style={styles.posterName}>{post.User.name}</span>
                              </div>
                              <div style={styles.title}>{post.title}</div>
                              <div style={styles.contentText}>{post.content}</div>
                           </div>
                    })
                  : getPostedLoading
                    ? <p>Loading ...</p>
                    : <p>{getPostedError ? getPostedError : "Data kosong"}</p>
                }
              </div>
            </div>
          </div>  
        : navigate('/user/login')
      }
    </>
  );
};

export default HomePage;

const styles = {
  container: {
    height: '100vh',
    widht: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    marginTop: '10vh',
    height: '90vh',
    paddingLeft: '20px',
    paddingRight: '20px',
    widht: '100vw',
    color: '#333',
  },
  posts: {
    fontWeight: '700',
    margin: '0',
  },
  overview: {
    fontWeight: '500',
    margin: '0'
  },

  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'auto auto',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    position: 'relative',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '65%',
    widht: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
  contentText: {
    marginTop: '5px',
  },
  posterInfo: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: 'gray',
  },
  posterName: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  posterDate: {
    fontSize: '12px',
  },
};