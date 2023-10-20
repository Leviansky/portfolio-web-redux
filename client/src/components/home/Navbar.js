import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { resetLogin } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const {activeTab} = useSelector((state) => state.HomeReducer)
  
  useEffect(() => {
    setToken(localStorage.getItem('access_token'))
    setName(localStorage.getItem('name'))
    console.log(activeTab, `Harusnya apa ni`);
  }, [activeTab, dispatch])
  
  const navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.clear();
    dispatch(resetLogin())
    navigate('/user/login');
  }

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };
  

  return (
    <div style={styles.Navbar}>
      <div style={styles.containerNavbar}>
        <Link
          to="/"
          style={activeTab === 'Home' ? { ...styles.link, ...styles.activeLink } : styles.link}
        >
          Home
        </Link>
        {token ? (
          <Link
            to="/post"
            style={activeTab === 'Post' ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            Post
          </Link>
        ) : (
          <></>
        )}
        <Link
          to="/about"
          style={activeTab === 'About' ? { ...styles.link, ...styles.activeLink } : styles.link}
        >
          About us
        </Link>
        <Link
          to="/contact"
          style={activeTab === 'Contact' ? { ...styles.link, ...styles.activeLink } : styles.link}
        >
          Contact us
        </Link>
      </div>
      {name ? (
        <div style={styles.profile}>
          <div>{name}</div>
          <button style={styles.logoutButton} onClick={() => logoutHandler()}>
            LOGOUT!
          </button>
        </div>
      ) : (
        <Link to="/user/login" style={styles.loginButton}>
          LOGIN!
        </Link>
      )}
    </div>
  );
};

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
    width: '100vw',
    marginBottm: '20px',
  },
  containerNavbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '70px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  activeLink: {
    position: 'relative',
    borderBottom: '2px solid blue',
    transition: 'border-bottom 0.5s ease',
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
    border: '0px',
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
  },
};