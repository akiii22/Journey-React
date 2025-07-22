import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("Jerome");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobbbies] = useState("Basketball");
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    hobby: "Basketball",
  });

  const updateAll = () => {
    // setPerson({
    //   name: "Jerome",
    //   age: 25,
    //   hobby: "Coding",
    // });
    // setPerson({ name: "Susan" });
    setPerson({ ...person, name: "susan" });
  };
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{`Enjoy: ${person.hobby}`}</h3>
      <button className="btn" onClick={updateAll}>
        Update All
      </button>
    </>
  );
};

export default UseStateObject;
