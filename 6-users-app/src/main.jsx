import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UsersApp } from "./UsersApp";
import { LoginPage } from "./auth/pages/LoginPAge";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
