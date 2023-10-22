import React, { useEffect, useState } from 'react';
import { addExperience, changeStatusModalAddExp, getDetailUser } from '../../actions/aboutusAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ModalAddExperience = () => {
  const dispatch = useDispatch()
  const [name_company, setNameCompany] = useState('')
  const [role, setRole] = useState('')
  const [jobdesk, setJobdesk] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience({name_company, role, jobdesk}))
    setNameCompany('')
    setRole('')
    setJobdesk('')
    Swal.fire({
      icon: 'success',
      title: 'Add experience success!',
      showConfirmButton: false,
      timer: 1500
    })
    dispatch(getDetailUser())
    dispatch(changeStatusModalAddExp(false))
  };
  
  const handleClose = () => {
    dispatch(changeStatusModalAddExp(false))
  }

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <span onClick={handleClose} style={styles.closeButton}>
          &times;
        </span>
        <div style={styles.title}>Add New Experience</div>
        <form style={styles.formContainer} onSubmit={handleSubmit}>
          <label style={styles.label}>Company Name:</label>
          <input
            style={styles.form}
            type="text"
            name="name_company"
            onChange={(e) => setNameCompany(e.target.value)}
          />
          <label style={styles.label}>Role:</label>
          <input
            style={styles.form}
            type="text"
            name="role"
            onChange={(e) => setRole(e.target.value)}
          />
          <label style={styles.label}>Jobdesk:</label>
          <textarea
            style={styles.formArea}
            type="text"
            name="jobdesk"
            onChange={(e) => setJobdesk(e.target.value)}
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

export default ModalAddExperience;
