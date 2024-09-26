export const UserRow = ({ handlerRemoveUser, id, userName, email }) => {
  const onRemoveUser = () => {
    handlerRemoveUser(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td>
        <button type="button" className="btn btn-secondary btm-sm">
          Update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btm-sm"
          onClick={() => onRemoveUser(id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
