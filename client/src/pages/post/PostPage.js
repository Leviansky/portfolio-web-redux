import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';


const PostPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveTab('Post'))
  }, [dispatch])

  return (
    <div style={styles.container}>
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