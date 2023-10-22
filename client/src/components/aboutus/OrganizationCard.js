import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faPenToSquare, 
  faTrash, 
  faSitemap 
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusModalAddOrg, changeStatusModalEditOrg, deleteOrganization, detailOrganization, getDetailUser } from '../../actions/aboutusAction';
import Swal from 'sweetalert2';

const OrganizationCard = () => {
  const dispatch = useDispatch()
  const { detailUserResult } = useSelector((state) => state.AboutusReducer) 

  const handleEdit = (data) => {
    dispatch(detailOrganization(data))
    dispatch(changeStatusModalEditOrg(true))
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this organization?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrganization(id))
        Swal.fire(
          'Deleted!',
          'Your organization has been successfully deleted.',
          'success'
        )
        dispatch(getDetailUser())
        }
      })
  }

  return (
    <div style={styles.detailBox}>
        <div style={styles.titleDetailContainer}>
            <FontAwesomeIcon icon={faSitemap} size='2x' color='gray'/>
            <div style={styles.textTitle}>Organization</div>
        </div>
        <div style={styles.containerButton}>
            <button onClick={() => dispatch(changeStatusModalAddOrg(true))} style={styles.button}><FontAwesomeIcon icon={faPlus} size='xl' color='gray'/></button>
        </div>
        {
            detailUserResult.Organitations.map((org) => {
            return (<div style={styles.cardContainer}>
                <div style={styles.containerCardButton}>
                  <button onClick={() => handleEdit(org)} style={styles.button}><FontAwesomeIcon icon={faPenToSquare} size='sm' color='gray'/></button>
                  <button onClick={() => handleDelete(org.id)} style={styles.button}><FontAwesomeIcon icon={faTrash} size='sm' color='gray'/></button>
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
