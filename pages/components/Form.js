import { useState } from "react";
import Participants from "./Participants";

const Form = () => {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  let number = 10;
  const CheakoutData = [
    {
      fullname: "",
      age: "",
    },
  ];
  const [formFields, setFormFields] = useState(CheakoutData);

  if (formFields.length === 1) {
    setDisabled.disabled === true;
  }
  const handleFormChange = (e, index) => {
    let data = [...formFields];
    data[index][e.target.name] = e.target.value;
    setFormFields(data);
  };
  const addFields = () => {
    let object = {
      fullname: "",
      age: "",
    };
    setFormFields([...formFields, object]);
    increase();
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
  return (
    <>
      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <form onSubmit={submit}>
              <label>Participant {counter}</label>
              <input name="fullname" placeholder="Participant Full Name" onChange={(e) => handleFormChange(e, index)} value={form.name} />
              <input name="age" placeholder="Participant age" onChange={(e) => handleFormChange(e, index)} value={form.age} />
              {/* <button onClick={() => removeField(index)}>delete participan</button> */}
            </form>
          </div>
        );
      })}
      {formFields.length < number && <button onClick={addFields}>ADD PARTICIPANT</button>}

      {formFields.length < number && (
        <button disabled={true} onClick={submit}>
          this is cool{" "}
        </button>
      )}

      {formFields.length === number && (
        <button disabled={false} onClick={submit}>
          this is cool{" "}
        </button>
      )}

      {/* {formFields.length === number && (
        <button disabled={disabled} onClick={submit}>
          GO TO CHECKOUT
        </button>
      )} */}
      {/* <button disabled={disabled}>Click to Disable</button> */}
      <Participants />
    </>
  );
};

export default Form;
