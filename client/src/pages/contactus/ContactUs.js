import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';


const ContactUsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveTab('Contactus'))
  }, [dispatch])

  return (
    <div style={styles.container}>
    </div>
  );
};

export default ContactUsPage;

const styles = {
  container: {
    height: '100vh',
    widht: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
};