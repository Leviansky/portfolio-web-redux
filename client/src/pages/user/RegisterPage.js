import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser,resetRegister} from '../../actions/userAction'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifPassword, setVerifPassword] = useState('');
    const [token, setToken] = useState('');
    const {registerUserResult} = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
  
    useEffect(() => {
        setToken(localStorage.getItem("access_token"))
        if(token) {
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        if (registerUserResult) {
          console.log(registerUserResult);
          Swal.fire({
            icon: 'success',
            title: 'Register success',
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch(resetRegister());
          navigate('/user/login');
        } else {
          console.log('gada token');
        }
      }, [registerUserResult, dispatch]);
  
    const registerHandler = (event) => {
      event.preventDefault()
      dispatch(registerUser({username, password, verifPassword}))
    }
    
    return (
        <div style={styles.container}>
            <div style={styles.loginContainer}>
                <h2 style={styles.caption}>Create an account</h2>
                <h1 style={styles.title}>Register</h1>
                <form style={styles.form} onSubmit={(event) => registerHandler(event)}>
                    <input style={styles.input} type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                    <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <input style={styles.input} type="password" placeholder="verifPassword" value={verifPassword} onChange={(event) => setVerifPassword(event.target.value)}/>
                <button style={styles.button} type="submit">Submit</button>
                <p style={styles.login}>Have an account? <span><Link to="/user/login">LOGIN</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;

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
  },
  login: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};
