import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, changePost, detailPost, changeStatusModalAddPost, changeStatusModalEditPost } from '../../actions/postAction';
import Swal from 'sweetalert2';

const SelectorCard = () => {
  const dispatch = useDispatch();
  const { changePostResult, getPostsResult, getPostsLoading, getPostsError, detailPostResult,} = useSelector(
    (state) => state.PostReducer
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if(changePostResult) {
      dispatch(getPosts());
    }
  }, [changePostResult,dispatch]);

  useEffect(() => {
    console.log(detailPostResult);
  }, [detailPostResult,dispatch]);

  const handleSelectPost = (postId, isPosting) => {
    if (isPosting) {
      Swal.fire({
          title: 'Are you sure?',
          text: "You want to withdraw this content?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, take it!'
      }).then((result) => {
          if (result.isConfirmed) {
            dispatch(changePost(postId))
            Swal.fire(
                'Retrieved!',
                'Your post has been successfully retrieved.',
                'success'
            )
          }
        })
    } else {
      Swal.fire({
          title: 'Are you sure?',
          text: "You want to post this content?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, posting it!'
      }).then((result) => {
          if (result.isConfirmed) {
            dispatch(changePost(postId))
            Swal.fire(
                'Posted!',
                'Your post has been posted.',
                'success'
            )
          }
        })
    }
  };

  const handleEdit = (data) => {
    dispatch(detailPost(data))
    dispatch(changeStatusModalEditPost(true))
  }

  return (
    <>
      {getPostsResult ? (
        getPostsResult.map((post) => (
          <div
            key={post.id}
            style={styles.card}
          >
            <div style={styles.editButtonContainer}>
              <button style={styles.editButton} onClick={() => handleEdit(post)}>EDIT</button>
            </div>
            <div style={styles.checkboxContainer} onClick={() => handleSelectPost(post.id,post.isPosting)}>
              <input
                style={styles.checkbox}
                type="checkbox"
                checked={post.isPosting}
                onChange={() => handleSelectPost(post.id)}
              />
            </div>
            <div style={styles.imageContainer}>
              <img src={post.image} alt="card" style={styles.image} />
            </div>
            <div style={styles.posterInfo}>
              <span style={styles.posterName}>{post.User.name}</span>
            </div>
            <div style={styles.title}>{post.title}</div>
            <div style={styles.contentText}>{post.content}</div>
          </div>
        ))
      ) : getPostsLoading ? (
        <p>Loading ...</p>
      ) : (
        <p>{getPostsError ? getPostsError : 'Data kosong'}</p>
      )}
    </>
  );
};

export default SelectorCard;


const styles = {
  content: {
    marginTop: '10vh',
    height: '90vh',
    paddingLeft: '20px',
    paddingRight: '20px',
    widht: '100vw',
    color: '#333',
  },
  posts: {
    fontWeight: '700',
    margin: '0',
  },
  overview: {
    fontWeight: '500',
    margin: '0'
  },

  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'auto auto',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    position: 'relative',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '65%',
    widht: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
  contentText: {
    marginTop: '5px',
  },
  posterInfo: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: 'gray',
  },
  posterName: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  posterDate: {
    fontSize: '12px',
  },

  checkboxContainer: {
    position: 'absolute',
    display: 'flex',
    top: '20px',
    right: '0%',
    left: '20px',
    bottom: '0%',
    zIndex: '2',
    cursor: 'pointer',
  },

  checkbox: {
    height: '25px',
    width: '25px',
    borderRadius: '5px',
    zIndex: '2',
  },

  editButtonContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#f9f9f9',
    zIndex: '5'
  },

  editButton: {
    background: 'none',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'black',
    zIndex: '5'
  },
}