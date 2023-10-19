import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProfilePage, LoginPage} from "../../pages";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default UserRoutes;
