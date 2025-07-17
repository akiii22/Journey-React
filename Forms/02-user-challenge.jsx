import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const copyId = Date.now();
    const newPerson = { copyId, name };
    const updatedPeople = [...people, newPerson];
    setPeople(updatedPeople);
    setName("");
  };
  const handleRemove = (id) => {
    const removeItems = people.filter((person) => person.id !== id);
    setPeople(removeItems);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h5>{name}</h5>
              <button onClick={() => handleRemove(id)}>remove</button>
            </div>
          );
        })}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
