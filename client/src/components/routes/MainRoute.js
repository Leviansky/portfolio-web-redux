import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserRoutes from './UserRoutes';
import { HomePage, PostPage } from '../../pages';
import HomeRoutes from './HomeRoutes';

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomeRoutes />}></Route>
        <Route path="user/*" element={<UserRoutes />}></Route>
      </Routes>
    </>
  );
}

export default MainRoute
