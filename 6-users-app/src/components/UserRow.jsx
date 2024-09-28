export const UserRow = ({
  handlerUserSelectedForm,
  handlerRemoveUser,
  id,
  username,
  email,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btm-sm"
          onClick={() => handlerUserSelectedForm({ id, username, email})}
        >
          Update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btm-sm"
          onClick={() => handlerRemoveUser(id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
