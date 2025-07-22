import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // const handleInc = () => {
  //   setValue((prev) => {
  //     let newValue = prev + 1;
  //     console.log(newValue);
  //     return newValue;
  //   });
  //   console.log(value);
  // };
  const handleInc = () => {
    setTimeout(() => {
      console.log("click ");
      setValue((prev) => prev + 1);
    }, 3000);
  };
  return (
    <>
      <p>{value}</p>
      <button className="btn" onClick={handleInc}>
        Add
      </button>
    </>
  );
};

export default UseStateGotcha;
