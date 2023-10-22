import React, {useEffect} from 'react'
import Content from '../../components/home/Content'
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';


const HomePage = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setActiveTab('Home'))
  }, [dispatch])

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.posts}>Recent Posts</h1>
        <h3 style={styles.overview}>Post overview</h3>
        <div style={styles.cardContainer}>
        <Content />
        </div>
      </div>
    </div>  
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
};