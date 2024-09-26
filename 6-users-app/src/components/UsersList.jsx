import { UserRow } from "./UserRow";

export const UsersList = ({ handlerRemoveUser, users = [] }) => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Update</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, userName, email }) => (
          <UserRow
            key={id}
            id={id}
            userName={userName}
            email={email}
            handlerRemoveUser={handlerRemoveUser}
          />
        ))}
      </tbody>
    </table>
  );
};
