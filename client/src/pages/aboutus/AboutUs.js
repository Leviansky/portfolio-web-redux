import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';


const AboutUsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveTab('Aboutus'))
  }, [dispatch])

  return (
    <div style={styles.container}>
    </div>
  );
};

export default AboutUsPage;

const styles = {
  container: {
    height: '100vh',
    widht: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
};