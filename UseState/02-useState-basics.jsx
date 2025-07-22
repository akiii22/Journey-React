import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((count) => count + 1);
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={handleInc}>
        Add
      </button>
    </div>
  );
};

export default UseStateBasics;
