import { useEffect, useState } from "react";
import Form from "./Form";

const Participants = () => {
  const [counter, setCounter] = useState(1);
  // const [disabled, setDisabled] = useState(false);
  const [next, setNext] = useState(false);

  let number = 3;
  const CheakoutData = [
    {
      fullname: "",
      age: "",
    },
  ];
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
  const removeField = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };
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
        <Form />
      ) : (
        <>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <p>{form.fullname}</p>
                <p>{form.age}</p>
                <form onSubmit={submit}>
                  <label>Participant {counter}</label>
                  <input name="fullname" placeholder="Participant Full Name" onChange={(e) => handleFormChange(e, index)} value={form.name} />
                  <input name="age" placeholder="Participant age" onChange={(e) => handleFormChange(e, index)} value={form.age} />
                  <button onClick={() => removeField(index)}>delete participan</button>
                </form>
              </div>
            );
          })}
          {/* {formFields.length < number && (
            <button disabled={disabled} onClick={addFields}>
              ADD PARTICIPANT
            </button>
          )} */}
          <div className="ass">
            {formFields.length < number ? <button onClick={addFields}>ADD PARTICIPANT</button> : <button disabled={true}>ADD PARTICIPANT</button>}
            {formFields.length < number ? (
              <button disabled={true}>GO TO CHECKOUT</button>
            ) : (
              <button onClick={() => setNext(true)} disabled={false} type="submit">
                GO TO CHECKOUT
              </button>
            )}
          </div>

          {/* {formFields.length < number && (
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
};

export default Participants;
