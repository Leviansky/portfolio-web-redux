import React, { useEffect, useState } from 'react';
import { addPost, changeStatusModalEditPost, getPosts, resetAddPost } from '../../actions/postAction';
import { useDispatch, useSelector } from 'react-redux';

const ModalEditPost = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const { addPostResult, getPostsResult, detailPostResult } = useSelector((state) => state.PostReducer)

  useEffect(() => {
    if(detailPostResult){
        setTitle(detailPostResult.title)
        setContent(detailPostResult.content)
        setImage(detailPostResult.image)
    }
  }, [detailPostResult, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({title, content}))
    dispatch(resetAddPost())
    console.log(addPostResult);
    console.log(getPostsResult);
    setTitle('')
    setContent('')
    setImage('')
    dispatch(changeStatusModalEditPost(false))
    dispatch(getPosts())
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
        <form style={styles.formContainer} onSubmit={handleSubmit}>
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
            style={styles.form}
            name="content"
            value={content}
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
    zIndex: 1,
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
  }
};

export default ModalEditPost;
