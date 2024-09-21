export const UserDetails = ({ user, id, activo }) => {
  return (
    <h3>
      Prueba para poner variables {user.name} {user.lastName} tiene el id {id}{" "}
      esta activo?: {activo ? "Sí" : "No"}
    </h3>
  );
};
