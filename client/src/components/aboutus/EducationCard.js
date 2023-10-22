import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faPlus, 
  faPenToSquare, 
  faTrash, 
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusModalAddEdu, changeStatusModalEditEdu, deleteEducation, detailEducation, getDetailUser } from '../../actions/aboutusAction';
import Swal from 'sweetalert2';

const EducationCard = () => {
  const dispatch = useDispatch()
  const { detailUserResult } = useSelector((state) => state.AboutusReducer) 

  const handleEdit = (data) => {
    dispatch(detailEducation(data))
    dispatch(changeStatusModalEditEdu(true))
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this education?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteEducation(id))
        Swal.fire(
          'Deleted!',
          'Your post has been successfully deleted.',
          'success'
          )
          dispatch(getDetailUser())
        }
      })
  }

  return (
    <div style={styles.detailBox}>
        <div style={styles.titleDetailContainer}>
            <FontAwesomeIcon icon={faGraduationCap} size='2x' color='gray'/>
            <div style={styles.textTitle}>Education</div>
        </div>
        <div style={styles.containerButton}>
            <button onClick={() => dispatch(changeStatusModalAddEdu(true))} style={styles.button}><FontAwesomeIcon icon={faPlus} size='xl' color='gray'/></button>
        </div>
        {
            detailUserResult.Education.map((edu) => {
            return (<div style={styles.cardContainer}>
                <div style={styles.containerCardButton}>
                  <button onClick={() => handleEdit(edu)} style={styles.button}><FontAwesomeIcon icon={faPenToSquare} size='sm' color='gray'/></button>
                  <button onClick={() => handleDelete(edu.id)} style={styles.button}><FontAwesomeIcon icon={faTrash} size='sm' color='gray'/></button>
                </div>
                  <div style={styles.textTitleCard}>{edu.level}</div>
                  <div style={styles.nameSchool}>{edu.name} - {edu.year}
                </div>
            </div>)
            })
        }
    </div>
  )
}

export default EducationCard;

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
