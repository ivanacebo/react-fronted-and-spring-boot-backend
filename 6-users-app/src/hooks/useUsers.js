import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
  {
    id: 1,
    username: "Pepe",
    password: "12345",
    email: "pepe@correo.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const handlerAddUser = (user) => {
    //console.log(user);

    dispatch({
      type: userSelected.id === 0 ? "addUser" : "updateUser",
      payload: user,
    });

    Swal.fire(
      userSelected.id === 0 ? "Usuario creado" : "Usuario actualizado",
      userSelected.id === 0
        ? "El usuario ha sido creado con exito!"
        : "El usuario ha sido actualizado con exito!",
      "success"
    );

    handlerCloseForm();
  };

  const handlerRemoveUser = (id) => {
    // console.log(id);

    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras recuperar este usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id,
        });
        Swal.fire(
          "Usuario Borrado!",
          "El usuario ha sido borrado con exito.",
          "success"
        );
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    // console.log(user);
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  };
};
