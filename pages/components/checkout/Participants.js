import { useEffect, useState } from "react";
import Tickets from "../../tickets";
import Areas from "../Areas";
import Form from "./Form";
// import { getId } from "..Areas/";

function Participants(props) {
  let number = props.participants;
  console.log(number);
  const [counter, setCounter] = useState(1);
  // const [disabled, setDisabled] = useState(false);
  const [next, setNext] = useState(false);

  // let number = 5;
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
    increase();
    submit(e);
  };
  // const removeField = (index) => {
  //   let data = [...formFields];
  //   data.splice(index, 1);
  //   setFormFields(data);
  // };
  const submit = (e) => {
    e.preventDefault();
    console.log("grab da data", formFields);
  };
  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  // useEffect(() => {
  //   localStorage.setItem("CheakoutData", JSON.stringify(CheakoutData));
  // }, [CheakoutData]);

  return (
    <>
      {next ? (
        <Form name={formFields} part={formFields} reservationID={props.orderResponse} />
      ) : (
        <>
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <p>{form.fullname}</p>
                  <p>{form.age}</p>
                  <label>Participant {counter}</label>
                  <input name="fullname" placeholder="Participant Full Name" onChange={(e) => handleFormChange(e, index)} value={form.name} />
                  <input name="age" placeholder="Participant age" onChange={(e) => handleFormChange(e, index)} value={form.age} />
                  {/* <button onClick={() => removeField(index)}>delete participan</button> */}
                </div>
              );
            })}
          </form>

          {/* {formFields.length < number && (
            <button disabled={disabled} onClick={addFields}>
              ADD PARTICIPANT
            </button>
          )} */}
          <div className="ass">
            {formFields.length < number ? (
              <button disabled={true}>GO TO CHECKOUT</button>
            ) : (
              <button onClick={() => setNext(true)} disabled={false} type="submit">
                GO TO CHECKOUT
              </button>
            )}
            {formFields.length < number ? <button onClick={addFields}>ADD PARTICIPANT</button> : <button disabled={true}>ADD PARTICIPANT</button>}
          </div>
          {/*{formFields.length < number && (
            <button disabled={true} onClick={submit}>
              this is cool{" "}
            </button>
          )}
          {formFields.length === number && (
            <button disabled={false} onClick={() => setNext(true)}>
              Go To Personal Information
            </button>
          )} */}
        </>
      )}
    </>
  );
}
export default Participants;
