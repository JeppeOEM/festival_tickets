import { useState, useRef } from "react";
import Participant from "./Participants";
import { getData } from "/data/formdata";
import Areas from "../Areas";

function Form(props) {
  let grab = props.id;
  console.log(props.part);
  const theForm = useRef(null);
  const [next, setNext] = useState(false);
  const [values, setValues] = useState({});
  console.log(grab);
  const submitComment = async (e) => {
    e.preventDefault();
    let inputData = theForm.current.elements;
    getData({
      id: grab,
      fullname: inputData.name.value,
      email: inputData.email.value,
      city: inputData.city.value,
      postcode: inputData.postcode.value,
      fulladdress: inputData.fulladdress.value,
      tickets: props.part,
    });

    console.log(theForm.current.elements.name.value);
  };

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
      name: "fulladdress",
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

    console.log("neww", name);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  return (
    <>
      {next ? (
        <Participant />
      ) : (
        <>
          <p>{grab}</p>
          <form onSubmit={submitComment} ref={theForm}>
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
              Addresse<input type="text" name="fulladdress" onChange={handleChange}></input>
            </label>
            <button type="submit">submit</button>
            <button onClick={() => setNext(true)}>next</button>
          </form>
          {/* <form onSubmit={submitComment} ref={theForm}>
            {inputs.map((input) => (
              <>
                <label key={input.id}>{input.label}</label>
                <input name={input.name} key={input.name} {...input} value={values[input.name] || ""} onChange={onChange} required></input>
              </>
            ))}

            <button disabled={next}>GO TO PAYMENT</button>
          </form> */}
        </>
      )}
    </>
  );
}

export default Form;
