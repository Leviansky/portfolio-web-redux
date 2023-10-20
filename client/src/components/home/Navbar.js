import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    setToken(localStorage.getItem('access_token'))
    setName(localStorage.getItem('name'))
  }, [token])

  const logoutHandler = () => {
    localStorage.clear()
    navigate('/user/login')
  }

  return (
    <div style={styles.Navbar}>
      <div style={styles.containerNavbar}>
        <Link style={styles.link}>Home</Link>
        {
          token
          ? <Link style={styles.link}>Post</Link>
          : <></>
        }
        <Link style={styles.link}>About us</Link>
        <Link style={styles.link}>Contact us</Link>
      </div>
      {
        name
        ? <div style={styles.profile}> 
            <div>{name}</div>
            <button style={styles.logoutButton} onClick={() => logoutHandler()}>LOGOUT!</button>
          </div>
        : <button style={styles.loginButton}>LOGIN!</button>
      }
    </div>
  );
}

export default Navbar;

const styles = {
  Navbar: {
    backgroundColor: '#FFFFFF',
    paddingTop: '25px',
    paddingBottom: '25px',
    fontSize: '20px',
    fontWeight: '400',
    color: '#333',
    borderBottom: '3px solid #F4F4F4',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    width: '100vw'
  },
  containerNavbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '70px'
  },
  link: {
    textDecoration: 'none', 
    color: '#333'
  },
  loginButton: {
    position: 'absolute',
    right: 30,
    alignSelf: 'center',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#E5E5E5',
    border: '0px'
  },
  logoutButton: {
    alignSelf: 'center',
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#E5E5E5',
    border: '0px',
  },
  profile: {
    position: 'absolute',
    right: 30,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 8,
    paddingBottom: 8,
    alignSelf: 'center',
    display: 'flex',
    gap: '20px',
  }
};
