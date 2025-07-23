import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log("Hmmm this is interesting");
    // const intId = setInterval(() => {
    //   console.log("hello from interval");
    // }, 1000);
    // return () => {
    //   clearInterval(intId);
    // };

    const someFunc = () => {};
    window.addEventListener("scroll", someFunc);
    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);
  return <h1>Hello There</h1>;
};

export default CleanupFunction;
