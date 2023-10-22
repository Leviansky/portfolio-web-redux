import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';


const ContactUsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setActiveTab('Contactus'))
  }, [dispatch])

  return (
    <div style={styles.container}>
      <div style={styles.topContainer}>
        <div style={styles.filter}>
          Contact Information
        </div>
      </div>
      <div style={styles.bottomContainer}>
        <div style={styles.contentContainer}>
          <div style={styles.leftContentContainer}>
            <div style={styles.boxContainer}>
              <div style={styles.leftBoxContainer}>
                <FontAwesomeIcon icon={faPhone} size='2x' />
              </div>
              <div style={styles.rightBoxContainer}>
                <div style={styles.leftTitleText}>Phone number:</div>
                <div style={styles.leftContentText}>+62 8244645797</div>
              </div>
            </div>
            <div style={styles.boxContainer}>
              <div style={styles.leftBoxContainer}>
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
              </div>
              <div style={styles.rightBoxContainer}>
                <div style={styles.leftTitleText}>Email address:</div>
                <div style={styles.leftContentText}>fikhazal@gmail.com</div>
              </div>
            </div>
            <div style={styles.boxContainer}>
              <div style={styles.leftBoxContainer}>
              <FontAwesomeIcon icon={faCode} size='2x' />
              </div>
              <div style={styles.rightBoxContainer}>
                <div style={styles.leftTitleText}>Github:</div>
                <div style={styles.leftContentText}>Leviansky</div>
              </div>
            </div>
          </div>
          <div style={styles.rightContentContainer}>
            <div style={styles.rightTitleText}>Send message:</div>
            <div style={styles.rightContentText}>Have a project in mind or want to collaborate? We'd love to hear from you! Feel free to drop us a line using the form below, and we'll get back to you as soon as possible.</div>
            <textarea style={styles.textMessage} />
            <button style={styles.buttonMessage}>SEND</button>
          </div>
        </div>
      </div>
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
  topContainer: {
    marginTop: '10vh',
    height: '40vh',
    widht: '100vw',
    display: 'flex',
    backgroundImage: `url(${require('../../images/bg-img.jpg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    zIndex: '1',
  },
  filter: {
    height: '40vh',
    width: '100%',
    display: 'flex',
    backgroundColor: "#004a75",
    opacity: 0.65,
    filter: 'hue-rotate(20deg) contrast(1)',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: '2',
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'white'
  },
  bottomContainer: {
    height: '50vh',
    width: '100vw',
    backgroundColor: '#EEEEEE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    height: '80%',
    width: '60%',
    backgroundColor: 'white',
    display: 'flex'
  },
  leftContentContainer: {
    display: 'flex',
    // height: '100%',
    flex: '2.5',
    backgroundColor: '#EEEEEE',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingRight: '10px'
  },
  rightContentContainer: {
    display: 'flex',
    flex: '4.5',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    flexDirection: 'column',  
  },
  boxContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex'
  },
  leftBoxContainer: {
    flex: '2',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightBoxContainer: {
    flex: '4',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  leftTitleText: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  leftContentText: {
    fontSize: '17px',
    fontWeight: '600',
  },
  rightTitleText: {
    fontSize: '35px',
    fontWeight: 'bold',
  },
  rightContentText: {
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '15px'
  },
  textMessage: {
    height: '45%',
    marginBottom: '15px'
  },
  buttonMessage: {
    width: '20%',
    padding: '8px',
    borderRadius: '5px',
    backgroundColor: '#ED9D05',
    fontWeight: 'bold',
    color: 'white',
    border: '0',
  }
};