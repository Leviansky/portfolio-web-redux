import React, { useEffect, useState } from 'react';
import Navbar from '../../components/home/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../actions/userAction'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {loginUserResult, loginUserLoading, loginUserError} = useSelector((state) => state.UserReducer)
  const dispatch = useDispatch()
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(loginUser({username, password}))
  }

  useEffect(() => {
    if(loginUserResult) {
      localStorage.setItem("access_token", loginUserResult.access_token)
    }
  }, [dispatch])
  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <h2 style={styles.caption}>You must login!</h2>
        <h1 style={styles.title}>Login</h1>
        <form style={styles.form} onSubmit={(event) => submitHandler(event)}>
          <input style={styles.input} type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
          <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <button style={styles.button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9'
  },
  loginContainer: {
    height: '70vh',
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
  },
  caption: {
    marginTop: '100px',
    marginBottom: '20px',
    color: '#333',
    fontSize: '50px',
    fontWeight: 'bold'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '20vw',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  }
};
