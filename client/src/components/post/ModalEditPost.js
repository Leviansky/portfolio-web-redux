import React, { useEffect, useState } from 'react';
import { changeStatusModalEditPost, deletePost, editPost, getPosts, resetAddPost } from '../../actions/postAction';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ModalEditPost = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const { detailPostResult } = useSelector((state) => state.PostReducer)

  useEffect(() => {
    if(detailPostResult){
        setId(detailPostResult.id)
        setTitle(detailPostResult.title)
        setContent(detailPostResult.content)
        setImage(detailPostResult.image)
    }
  }, [detailPostResult, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to update this content?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(editPost(id,{title, content, image}))
            setTitle('')
            setContent('')
            setImage('')
            Swal.fire(
                'Retrieved!',
                'Your post has been successfully updated.',
                'success'
                )
            }
            dispatch(getPosts())
        })
    dispatch(changeStatusModalEditPost(false))
  };

  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this content?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deletePost(id))
            setTitle('')
            setContent('')
            setImage('')
            Swal.fire(
                'Retrieved!',
                'Your post has been successfully deleted.',
                'success'
                )
            }
            dispatch(getPosts())
        })
    dispatch(changeStatusModalEditPost(false))
  };
  
  const handleClose = () => {
    dispatch(changeStatusModalEditPost(false))
  }

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <span onClick={handleClose} style={styles.closeButton}>
          &times;
        </span>
        <div style={styles.title}>EDIT POST</div>
        <form style={styles.formContainer} onSubmit={handleSubmit} onReset={handleDelete}>
          <label style={styles.label}>URL Image:</label>
          <input
            style={styles.form}
            type="text"
            name="imageUrl"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label style={styles.label}>Title:</label>
          <input
            style={styles.form}
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label style={styles.label}>Content:</label>
          <textarea
            style={styles.formArea}
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div style={styles.buttonContainer}>
            <button type="reset" style={styles.deleteButton}>Delete</button>
            <button type="submit" style={styles.submitButton}>Submit</button>
          </div>
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
    // height: '100%',
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
    width: '48%',
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

export default ModalEditPost;
