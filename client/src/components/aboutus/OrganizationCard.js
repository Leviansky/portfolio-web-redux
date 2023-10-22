import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faPenToSquare, 
  faTrash, 
  faSitemap 
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const OrganizationCard = () => {
const { detailUserResult } = useSelector((state) => state.AboutusReducer) 
  return (
    <div style={styles.detailBox}>
        <div style={styles.titleDetailContainer}>
            <FontAwesomeIcon icon={faSitemap} size='2x' color='gray'/>
            <div style={styles.textTitle}>Organization</div>
        </div>
        <div style={styles.containerButton}>
            <button style={styles.button}><FontAwesomeIcon icon={faPlus} size='xl' color='gray'/></button>
            <button style={styles.button}><FontAwesomeIcon icon={faPenToSquare} size='xl' color='gray'/></button>
        </div>
        {
            detailUserResult.Organitations.map((org) => {
            return (<div style={styles.cardContainer}>
                <div style={styles.containerCardButton}>
                <button style={styles.button}><FontAwesomeIcon icon={faPenToSquare} size='sm' color='gray'/></button>
                <button style={styles.button}><FontAwesomeIcon icon={faTrash} size='sm' color='gray'/></button>
                </div>
                <div style={styles.textTitleCard}>{org.name}</div>
                <div style={styles.textContentCard}>{org.role}</div>
            </div>)
            })
        }
    </div>
  )
}

export default OrganizationCard;

const styles = {
    detailBox: {
        width: '33%',
        border: '4px solid gray',
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
}
