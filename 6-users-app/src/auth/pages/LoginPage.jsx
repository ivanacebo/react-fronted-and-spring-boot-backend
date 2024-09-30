import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = ({ handlerLogin }) => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);

  const { username, password } = loginForm;

  const onImputChange = ({ target }) => {
    const { name, value } = target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(loginForm);
    if (!username || !password) {
      Swal.fire(
        "Error de validacion",
        "Debe completar los campos del formulario",
        "error"
      );
    }

    handlerLogin({ username, password });

    setLoginForm(initialLoginForm);
  };

  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login Pages</h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
