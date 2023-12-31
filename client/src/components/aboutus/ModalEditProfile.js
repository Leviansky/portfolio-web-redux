import React, { useEffect, useState } from 'react';
import { changeStatusModalEditUser, editUser, getDetailUser } from '../../actions/aboutusAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ModalEditProfile = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [image, setImage] = useState('')

  const { detailUserResult } = useSelector((state) => state.AboutusReducer)

  useEffect(() => {
    console.log("masuk di modal edit ni");
    if(detailUserResult){
        setId(detailUserResult.id)
        setName(detailUserResult.name)
        setAddress(detailUserResult.address)
        setImage(detailUserResult.image)
    }
  }, [detailUserResult, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to update this profile?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
    }).then((result) => {
        if (result.isConfirmed) {
          if(image !== '') {
            dispatch(editUser({name, address, image}))
          } else {
            dispatch(editUser({name, address}))
          }
          setName('')
          setAddress('')
          setImage('')
          Swal.fire(
              'Retrieved!',
              'Your post has been successfully updated.',
              'success'
              )
          }
          dispatch(getDetailUser())
          localStorage.removeItem("name")
          localStorage.setItem("name", name)
        })
    dispatch(changeStatusModalEditUser(false))
  };
  
  const handleClose = () => {
    dispatch(changeStatusModalEditUser(false))
  }

  return (
    <div style={styles.modal}> asadad
      <div style={styles.modalContent}>
        <span onClick={handleClose} style={styles.closeButton}>
          &times;
        </span>
        <div style={styles.title}>EDIT PROFILE</div>
        <form style={styles.formContainer} onSubmit={handleSubmit}>
          <label style={styles.label}>URL Image:</label>
          <input
            style={styles.form}
            type="text"
            name="imageUrl"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label style={styles.label}>Name:</label>
          <input
            style={styles.form}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label style={styles.label}>Address:</label>
          <input
            style={styles.form}
            type="text"
            name="title"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit" style={styles.submitButton}>
            Edit
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

export default ModalEditProfile;
