import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { UsersPage } from "../pages/UsersPage";
import { UserProvider } from "../context/UserProvider";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";

export const UserRoutes = () => {
  const { login } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="users" element={<UsersPage />} />

        {!login.isAdmin || (
          <>
            <Route path="users/register" element={<RegisterPage />} />

            <Route path="users/edit/:id" element={<RegisterPage />} />
          </>
        )}

        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
