import { UserForm } from "./UserForm";

export const UserModalForm = ({initialUserForm, handlerAddUser, userSelected, handlerCloseForm}) => {
  return (
    <div className="abrir-modal animacion fadeIn">
      <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {userSelected.id > 0 ? "Editar usuario" : "Nuevo usuario"} Modal
                Usuarios
              </h5>
            </div>
            <div className="modal-body">
              <UserForm
                initialUserForm={initialUserForm}
                handlerAddUser={handlerAddUser}
                userSelected={userSelected}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
