import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';
import SelectorCard from '../../components/post/SelectorCard';
import ModalAddPost from '../../components/post/ModalAddPost';
import { changeStatusModalAddPost } from '../../actions/postAction';
import ModalEditPost from '../../components/post/ModalEditPost';

const PostPage = () => {
  const dispatch = useDispatch()
  const {isOpenModalAddPost, isOpenModalEditPost} = useSelector((state) => state.PostReducer)

  useEffect(() => {
    dispatch(setActiveTab('Post'))
  }, [dispatch])

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.containerText}>
          <div style={styles.text}>
            <h1 style={styles.posts}>Your Posts</h1>
            <h3 style={styles.overview}>Post overview</h3>
          </div>
          <button style={styles.button} onClick={() => dispatch(changeStatusModalAddPost(true))}>+ ADD POST</button>
        </div>
        <div style={styles.cardContainer}>
        <SelectorCard />
        </div>
      </div>
      {
        isOpenModalAddPost && (<ModalAddPost />)
      }
      {
        isOpenModalEditPost && (<ModalEditPost />)
      }
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
  containerText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginLeft: '20px',
    marginBottom: '0'
  },
  overview: {
    fontWeight: '500',
    marginLeft: '20px',
    marginTop: '0',
    marginBottom: '0'
  },
  button: {
    paddingLeft: '50px',
    paddingRight: '50px',
    marginRight: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontWeight: 'bold',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'auto auto',
    gap: '20px',
    marginTop: '20px',
  }
};