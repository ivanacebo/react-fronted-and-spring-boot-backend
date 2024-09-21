import PropTypes from "prop-types";

export const HelloWorld = ({ user, id, title, activo }) => {
  // const name = 'Pepe';

  return (
    <>
      <div id="title">{title}</div>
      <h3>
        Prueba para poner variables {user.name} {user.lastName} tiene el id {id}{" "}
        esta activo?: {activo ? "Sí" : "No"}
      </h3>
      <ul>
        <li>prueba de tablas</li>
      </ul>
    </>
  );
};

HelloWorld.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  activo: PropTypes.bool,
};
