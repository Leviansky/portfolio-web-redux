import React from 'react'
import { Routes, Route } from "react-router-dom";
import UserRoutes from './UserRoutes';
import { HomePage } from '../../pages';

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="user/*" element={<UserRoutes />}></Route>
      </Routes>
    </>
  );
}

export default MainRoute
