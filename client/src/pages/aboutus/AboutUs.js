import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../actions/homeAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { getDetailUser } from '../../actions/aboutusAction';
import EducationCard from '../../components/aboutus/EducationCard';
import ExperienceCard from '../../components/aboutus/ExperienceCard';
import OrganizationCard from '../../components/aboutus/OrganizationCard';

const AboutUsPage = () => {
  const dispatch = useDispatch();
  const { detailUserResult, detailUserLoading, detailUserError } = useSelector((state) => state.AboutusReducer) 

  useEffect(() => {
    dispatch(setActiveTab('Aboutus'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDetailUser())
  }, [dispatch]);

  return (
    <div style={styles.container}>
      {detailUserResult ? (
        <div style={styles.content}>
          <div style={styles.leftContainer}>
            <div style={styles.titleWithEditButton}>
              <div style={styles.title}>{detailUserResult.name.split(' ')[0]}</div>
              <button style={styles.button}><FontAwesomeIcon icon={faPenToSquare} size='2x' color='gray'/></button>
            </div>
            <div style={styles.title}>{detailUserResult.name.split(' ').slice(1).join(' ')}</div>
            <div style={styles.address}>
              <FontAwesomeIcon icon={faLocationDot} />
              <div style={styles.textAddress}>{detailUserResult.address}</div>
            </div>
            <hr style={styles.horizontalLine} />
            <div style={styles.detailContainer}>
              {/* EDUCATION */}
              <EducationCard />
              {/* EXPERIENCE */}
              <ExperienceCard />
              {/* ORGANIZATION */}
              <OrganizationCard />
            </div>
          </div>
          <div style={styles.rightContainer}>
            <div style={styles.imageContainer}>
              <img
                src={detailUserResult.image}
                style={styles.image}
                alt=''
              ></img>
            </div>
          </div>
        </div>
      ) : detailUserLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{detailUserError ? detailUserError : 'Data kosong'}</p>
      )}
    </div>
  );
};

export default AboutUsPage;

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    marginTop: '10vh',
    marginLeft: '10vh',
    marginRight: '10vh',
    height: '90vh',
    // width: '100vw',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    // height: '80%',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    flex: '4',
    border: '3px solid white',
    backgroundColor : 'white',
    borderRadius: '20px',
    padding: '20px',
    position: 'relative',
  },
  rightContainer: {
    height: '60vh',
    width: '60vh',
    borderRadius: '50%',
    display: 'flex',
    flex: '2.5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: '80%',
    width: '80%',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  title: {
    margin: '0',
    fontSize: '70px',
    fontWeight: 'bold',
  },
  horizontalLine: {
    width: '100%',
    borderTop: '4px solid gray',
    margin: '20px 0',
  },
  address: {
    fontSize: '30px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  detailContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  detailBox: {
    // height: '100%',
    width: '33%',
    border: '4px solid gray',
    // borderRight: '4px solid gray',
    position: 'relative',
    padding: '15px'
  },
  titleDetailContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '10px',
    marginBottom: '15px',
  },
  textTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'gray'
  },
  containerButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  button: {
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'white',
  },
  cardContainer: {
    position: 'relative',
    marginBottom: '7px',
  },
  containerCardButton: {
    position: 'absolute',
    top: '0',
    right: '5px',
  },
  textTitleCard: {
    fontSize: '15px',
    fontWeight: '500'
  },
  textContentCard: {
    fontSize: '15px',
    fontWeight: '400'
  },
  titleWithEditButton: {
    display: 'flex',
    justifyContent: 'space-between',
  }
};
