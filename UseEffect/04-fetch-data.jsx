import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetch(url);
        const finalData = await userData.json();
        setUsers(finalData);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);
  return (
    <>
      {users.map((user) => {
        const { avatar_url, url, login, id } = user;
        return (
          <div key={id}>
            <img src={avatar_url} alt={avatar_url} />
            <h3>{login}</h3>
            <p style={{ fontStyle: "italic" }}>{url}</p>
          </div>
        );
      })}
    </>
  );
};
export default FetchData;
