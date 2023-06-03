import React, { useState } from "react";
// import ReactDOM from "react-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, address, city, state, zip);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={(event) => setAddress(event.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={(event) => setState(event.target.value)}
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          onChange={(event) => setZip(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;