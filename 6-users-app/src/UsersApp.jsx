import { LoginPage } from "./auth/pages/LoginPAge";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";

export const UsersApp = () => {
  const { login, handlerLogin, handlerLogout } = useAuth();

  return (
    <>
      {login.isAuth ? (
        <>
          <Navbar login={login} handlerLogout={handlerLogout} />
          <UsersPage />
        </>
      ) : (
        <LoginPage handlerLogin={handlerLogin} />
      )}
    </>
  );
};
