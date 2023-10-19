import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    // const { registerUserResult, registerUserLoading, registerUserError } = useSelector((state) => state.UserReducer)


  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('access_token'))
    // dispatch(registerUser({username, password, verifPassword}))
  }, [])

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
    </div>
  );
}

export default Navbar;

const styles = {
  Navbar: {
    backgroundColor: '#FFFFFF',
    padding: '25px',
    fontSize: '20px',
    fontWeight: '400',
    color: '#333',
    borderBottom: '3px solid #F4F4F4',
    display: 'flex',
    justifyContent: 'center'
  },
  containerNavbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '70px'
  },
  link: {
    textDecoration: 'none', 
    color: '#333'
  }
};
