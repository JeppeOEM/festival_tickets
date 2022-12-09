import { useState } from "react";
import Participant from "./Participants";

const Form = () => {
  const [next, setNext] = useState(false);
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
    city: "",
    postcode: "",
    addresse: "",
  });
  const inputs = [
    {
      id: "1",
      name: "fullname",
      type: "text",
      placeholder: "TYPE YOUR NAME",
      label: "Full name",
    },
    {
      id: "2",
      name: "email",
      type: "email",
      placeholder: "example@example.com",
      label: "Email Address",
    },
    {
      id: "3",
      name: "city",
      type: "text",
      placeholder: "",
      label: "City",
    },
    {
      id: "4",
      name: "postcode",
      type: "number",
      placeholder: "FX 2200",
      label: "Post Code",
    },
    {
      id: "5",
      name: "address",
      type: "text",
      placeholder: "YOUR FULL ADDRESS",
      label: "ADDRESS",
    },
  ];
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues((prev) => {
  //     return { ...prev, [name]: value };
  //   });

  //   console.log(e.target);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <>
      {next ? (
        <Participant />
      ) : (
        // <form onSubmit={handleSubmit}>
        //   <label>
        //     Name And Surname<input type="text" name="name" onChange={handleChange}></input>
        //   </label>
        //   <label>
        //     Email Adresse<input type="text" name="email" onChange={handleChange}></input>
        //   </label>
        //   <label>
        //     City<input type="text" name="city" onChange={handleChange}></input>
        //   </label>
        //   <label>
        //     Post Code<input type="number" name="postcode" onChange={handleChange}></input>
        //   </label>
        //   <label>
        //     Addresse<input type="text" name="addresse" onChange={handleChange}></input>
        //   </label>
        //   <button type="submit">submit</button>
        //   <button onClick={() => setNext(true)}>next</button>
        // </form>
        <>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <>
                <label key={input.id}>{input.label}</label>
                <input key={input.name} {...input} value={values[input.name] || ""} onChange={onChange} required></input>
              </>
            ))}

            <button disabled={next}>GO TO PAYMENT</button>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
