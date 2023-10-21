import React, { useState } from 'react';
import { addPost, changeStatusModalAddPost, getPosts, resetAddPost } from '../../actions/postAction';
import { useDispatch } from 'react-redux';

const ModalAddPost = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({title, content})).then((result) => {
        dispatch(resetAddPost())
        setTitle('')
        setContent('')
        dispatch(getPosts())
    }).catch((err) => {
        console.error(err);
    });
    dispatch(changeStatusModalAddPost(false))
  };
  
  const handleClose = () => {
    dispatch(changeStatusModalAddPost(false))
  }

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <span onClick={handleClose} style={styles.closeButton}>
          &times;
        </span>
        <div style={styles.title}>ADD POST</div>
        <form style={styles.formContainer} onSubmit={handleSubmit}>
          {/* <label style={styles.label}>URL Image:</label>
          <input
            style={styles.form}
            type="text"
            name="imageUrl"
            onChange={(e) => setImage(e.target.value)}
          /> */}
          <label style={styles.label}>Title:</label>
          <input
            style={styles.form}
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label style={styles.label}>Content:</label>
          <textarea
            style={styles.formArea}
            name="content"
            onChange={(e) => setContent(e.target.value)}
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
    position: 'relative'
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
    flexDirection: 'column',
    // backgroundColor: 'red'
  },
  submitButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
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

export default ModalAddPost;
