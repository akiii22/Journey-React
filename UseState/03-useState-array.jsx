import { useState } from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeOne = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const removeAll = () => {
    setPeople([]);
  };
  return (
    <>
      <div>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <p>{person.name}</p>
              <button onClick={() => removeOne(person.id)}>remove</button>
            </div>
          );
        })}
        <button className="btn" onClick={removeAll}>
          Clear Items
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
