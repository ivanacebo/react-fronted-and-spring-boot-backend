import { useState } from "react";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};

export const UserForm = () => {
  const [userForm, setUSerForm] = useState(initialUserForm);
  const { username, password, email } = userForm;

  const onImputChange = ({ target }) => {
    const { name, value } = target;
    setUSerForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!username || !password || !email) {
      alert("Debe completar los campos del formulario");
      return;
    }

    console.log(userForm);

    // Guardar el user form en el listado de usuarios
    setUSerForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onImputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={onImputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onImputChange}
      />
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};
