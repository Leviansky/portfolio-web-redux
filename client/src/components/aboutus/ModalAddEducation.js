import React, { useEffect, useState } from 'react';
import { addEducation, changeStatusModalAddEdu, getDetailUser } from '../../actions/aboutusAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ModalAddEducation = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [level, setLevel] = useState('Elementary School')
  const [year, setYear] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const levelWithoutUnderscore = level.replace(/_/g, ' ');
    console.log(levelWithoutUnderscore);
    dispatch(addEducation({name, level: levelWithoutUnderscore, year}))
    setName('')
    setLevel('')
    setYear('')
    Swal.fire({
      icon: 'success',
      title: 'Add education success!',
      showConfirmButton: false,
      timer: 1500
    })
    dispatch(getDetailUser())
    dispatch(changeStatusModalAddEdu(false))
  };
  
  const handleClose = () => {
    dispatch(changeStatusModalAddEdu(false))
  }

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <span onClick={handleClose} style={styles.closeButton}>
          &times;
        </span>
        <div style={styles.title}>Add New Education</div>
        <form style={styles.formContainer} onSubmit={handleSubmit}>
            <label style={styles.label}>Education Level:</label>
            <select style={styles.form} onChange={(e) => setLevel(e.target.value)}>
                <option value="Elementary_School">Elementary School</option>
                <option value="Junior_High_School">Junior High School</option>
                <option value="Senior_High_School">Senior High School</option>
                <option value="University">University</option>
            </select>
            <label style={styles.label}>Name School:</label>
            <input
                style={styles.form}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
            />
            <label style={styles.label}>Year of Graduation:</label>
            <input
                style={styles.form}
                type="number"
                name="year"
                onChange={(e) => setYear(e.target.value)}
            />
            <button type="submit" style={styles.submitButton}>
                Submit
            </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: '10',
    // backgroundColor: 'green'
  },
  modalContent: {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '25px',
    border: '1px solid #888',
    width: '32%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  closeButton: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
    cursor: 'pointer',
    position: 'absolute',
    right: '30px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '48%',
    fontWeight: 'bold',
  },
  title: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '15px',
  },
  label: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '5px',
  },
  form: {
    marginBottom: '10px',
    fontSize: '17px',
  },
  formArea: {
    height: '20vh',
    marginBottom: '10px',
    fontSize: '17px',
  }
};

export default ModalAddEducation;
