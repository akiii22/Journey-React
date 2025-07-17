import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Controlled inputs</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name=""
          value={name}
          id="name"
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name=""
          value={email}
          id="email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
