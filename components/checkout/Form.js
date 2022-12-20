import { useState, useRef } from "react";
import Cheackout from "./Checkout";
import { getData } from "/data/formdata";
import Areas from "../Areas";

function Form(props) {
  let grab = props.id;
  const theForm = useRef(null);
  const [next, setNext] = useState(false);
  const [values, setValues] = useState({});
  console.log(grab);
  // const submitComment = async (e) => {
  //   e.preventDefault();
  //   let inputData = theForm.current.elements;
  //   getData({
  //     id: grab,
  //     fullname: inputData.name.value,
  //     email: inputData.email.value,
  //     city: inputData.city.value,
  //     postcode: inputData.postcode.value,
  //     fulladdress: inputData.fulladdress.value,
  //     ticketHolders: props.part,
  //   });
  //   setNext(true);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNext(true);
    // console.log("neww", values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  return (
    <>
      {next ? (
        <Cheackout info={values} part={props.part} reservationID={grab} />
      ) : (
        <>
          <p>{grab}</p>
          <form onSubmit={handleSubmit} ref={theForm}>
            <label>
              Name And Surname<input type="text" name="name" onChange={handleChange} required></input>
            </label>
            <label>
              Email Adresse<input type="text" name="email" onChange={handleChange} required></input>
            </label>
            <label>
              City<input type="text" name="city" onChange={handleChange} required></input>
            </label>
            <label>
              Post Code<input type="number" name="postcode" onChange={handleChange} required></input>
            </label>
            <label>
              Addresse<input type="text" name="fulladdress" onChange={handleChange} required></input>
            </label>
            {/* <button>submit</button> */}
            <button>go to payment</button>
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
