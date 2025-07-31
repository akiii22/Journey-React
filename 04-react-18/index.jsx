import { useState, useTransition, Suspens, lazy, Suspense } from "react";
const SlowComponent = lazy(() => import("./SlowComponent.jsx"));
const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, setTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);

    setTransition(() => {
      const newItems = Array.from({ length: 500 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });

    // slow down CPU
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        <h4>Loading....</h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
      <button onClick={() => setShow(!show)}> toggle</button>
      {show && (
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
