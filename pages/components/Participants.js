import { useState } from "react";

const Participants = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    city: "",
    postcode: "",
    addresse: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name And Surname<input type="text" name="name" onChange={handleChange}></input>
        </label>
        <label>
          Email Adresse<input type="text" name="email" onChange={handleChange}></input>
        </label>
        <label>
          City<input type="text" name="city" onChange={handleChange}></input>
        </label>
        <label>
          Post Code<input type="number" name="postcode" onChange={handleChange}></input>
        </label>
        <label>
          Addresse<input type="text" name="addresse" onChange={handleChange}></input>
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Participants;
