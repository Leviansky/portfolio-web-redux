import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosteds } from '../../actions/postAction';

const Content = () => {
  const dispatch = useDispatch()
  const {getPostedResult, getPostedLoading, getPostedError} = useSelector((state) => state.PostReducer)

  useEffect(() => {
    dispatch(getPosteds())
  }, [dispatch])

  return (
    <>
        {
          getPostedResult
          ? getPostedResult.map((post) => {
            return <div key={post.id} style={styles.card}>
                      <div style={styles.imageContainer}>
                        <img src={post.image} alt="card" style={styles.image} />
                      </div>
                      <div style={styles.posterInfo}>
                        <span style={styles.posterName}>{post.User.name}</span>
                      </div>
                      <div style={styles.title}>{post.title}</div>
                      <div style={styles.contentText}>{post.content}</div>
                    </div>
            })
          : getPostedLoading
            ? <p>Loading ...</p>
            : <p>{getPostedError ? getPostedError : "Data kosong"}</p>
        }
    </>
  )
}

export default Content


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
}