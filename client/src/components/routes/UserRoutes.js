import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProfilePage, LoginPage, RegisterPage} from "../../pages";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="" element={<ProfilePage />} />
    </Routes>
  );
};

export default UserRoutes;
