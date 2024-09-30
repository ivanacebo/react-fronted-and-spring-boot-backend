import { useState } from "react";
import { UserForm } from "../components/UserForm";

export const RegisterPage = ({ handlerAddUser, initialUserForm }) => {
  const [userSelected, setUserSelected] = useState(initialUserForm);

  return (
    <>
      <div className="container my-4">
        <h4>Registro de Usuarios</h4>
        <div className="row">
          <div className="col">
            <UserForm
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
              userSelected={userSelected}
            />
          </div>
        </div>
      </div>
    </>
  );
};
