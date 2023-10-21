import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AboutUsPage, ContactUsPage, HomePage, PostPage } from "../../pages";
import { isLogin } from '../../actions/userAction';
import Navbar from "../home/Navbar";

const HomeRoutes = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {isLoginResult} = useSelector((state) => state.UserReducer)
  
  useEffect(() => {
    dispatch(isLogin())
    console.log(`cek login bsa ga ni ${isLoginResult}`);
  }, [isLoginResult, dispatch])

  return (
    <>
      <Navbar />
      {
        isLoginResult
        ? <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="post" element={<PostPage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="contact" element={<ContactUsPage />} />
          </Routes>
        : navigate('/user/login')
      }
    </>
  );
};

export default HomeRoutes;
