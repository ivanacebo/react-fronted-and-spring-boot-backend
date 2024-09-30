import { useReducer } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './auth/hooks/useAuth';
import { LoginPage } from './auth/pages/LoginPage';
import { UserRoutes } from './routes/UserRoutes';

export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth();
    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path='/*' element={<UserRoutes
                            login={login}
                            handlerLogout={handlerLogout} />} />
                    )
                    : <>
                        <Route path='/login'
                            element={<LoginPage
                                handlerLogin={handlerLogin} />} />
                        <Route path='/*' element={<Navigate to="/login" /> }  />
                    </>
                    
            }
        </Routes>
    );
}