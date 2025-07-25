import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const value = useAppContext();
  const { user, logout } = value;
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
export default UserContainer;
