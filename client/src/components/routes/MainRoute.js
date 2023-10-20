import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserRoutes from './UserRoutes';
import { HomePage, PostPage } from '../../pages';

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="post" element={<PostPage />}></Route>
        <Route path="user/*" element={<UserRoutes />}></Route>
      </Routes>
    </>
  );
}

export default MainRoute
