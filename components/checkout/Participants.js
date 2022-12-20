import { useEffect, useState } from "react";
import Tickets from "../../tickets";
import Areas from "../Areas";
import Form from "./Form";
// import { getId } from "..Areas/";

function Participants(props) {
  let number = props.participants;
  // let number = props.ticketsNr;
  // console.log(number);
  const [counter, setCounter] = useState(1);
  // const [disabled, setDisabled] = useState(false);
  const [next, setNext] = useState(false);
  const CheakoutData = [{}];
  const [formFields, setFormFields] = useState(CheakoutData);

  // if (formFields.length === 2) {
  //   setDisabled(false);
  // }
  const handleFormChange = (e, index) => {
    let data = [...formFields];
    data[index][e.target.name] = e.target.value;
    setFormFields(data);
  };
  const addFields = (e) => {
    let object = {
      fullname: "",
      age: "",
    };
    setFormFields([...formFields, object]);
    // increase();
    // submit(e);
  };
  // const removeField = (index) => {
  //   let data = [...formFields];
  //   data.splice(index, 1);
  //   setFormFields(data);
  // };
  const submit = (e) => {
    e.preventDefault();
    setNext(true);
    // console.log("grab da data", formFields);
  };
  // const increase = () => {
  //   setCounter((counter) => counter + 1);
  // };

  // useEffect(() => {
  //   localStorage.setItem("CheakoutData", JSON.stringify(CheakoutData));
  // }, [CheakoutData]);

  return (
    <>
      {next ? (
        <Form name={formFields} part={formFields} />
      ) : (
        <>
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <label>
                    Participant full name <input name="fullname" type="text" placeholder="Full Name" onChange={(e) => handleFormChange(e, index)} value={form.name} required />
                  </label>
                  <label>
                    participants age
                    <input name="age" min="15" max="100" type="number" placeholder="Age" onChange={(e) => handleFormChange(e, index)} value={form.age} required />
                  </label>
                  {/* <button onClick={() => removeField(index)}>delete participan</button> */}
                </div>
              );
            })}

            {formFields.length < number ? (
              <button disabled={true}>GO TO CHECKOUT</button>
            ) : (
              <button disabled={false} type="submit">
                GO TO CHECKOUT
              </button>
            )}
            {formFields.length < number ? <button onClick={addFields}>ADD PARTICIPANT</button> : <button disabled={true}>ADD PARTICIPANT</button>}
          </form>
        </>
      )}
    </>
  );
}
export default Participants;