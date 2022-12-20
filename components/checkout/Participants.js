import { useEffect, useState } from "react";
import FormInfo from "./FormInfo";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import StyleSheet from "../../styles/pages/tickets.module.scss";

function Participants(props) {
  //ANIMATION LIBRARY
  const [listRef] = useAutoAnimate();
  //NEXT BUTTON
  const [next, setNext] = useState(false);
  // FIELD DATA
  const [formFields, setFormFields] = useState([{}]);

  let number = props.participants;
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
  };
  const submit = (e) => {
    e.preventDefault();
    setNext(true);
  };
  return (
    <>
      {next ? (
        <FormInfo name={formFields} part={formFields} id={props.orderResponse} />
      ) : (
        <>
          <form className={StyleSheet.form} onSubmit={submit} ref={listRef}>
            <h2>Participants</h2>
            {formFields.map((form, index) => {
              return (
                <div className={StyleSheet.fieldRow} key={index}>
                  <label className={StyleSheet.fieldColumn}>
                    Participant full name <input className={StyleSheet.input} name="fullname" type="text" placeholder="Full Name" onChange={(e) => handleFormChange(e, index)} value={form.name} required />
                  </label>
                  <label className={StyleSheet.fieldColumn}>
                    participants age
                    <input className={StyleSheet.input} name="age" min="15" max="100" type="number" placeholder="Age" onChange={(e) => handleFormChange(e, index)} value={form.age} required />
                  </label>
                </div>
              );
            })}
            <div className={StyleSheet.buttons}>
              {formFields.length < props.participants ? (
                <button disabled={true} className={StyleSheet.disabled}>
                  GO TO CHECKOUT
                </button>
              ) : (
                <button disabled={false} className={StyleSheet.button} type="submit">
                  GO TO CHECKOUT
                </button>
              )}
              {formFields.length < props.participants ? (
                <button onClick={addFields} className={StyleSheet.button}>
                  ADD PARTICIPANT
                </button>
              ) : (
                <button disabled={true} className={StyleSheet.disabled}>
                  ADD PARTICIPANT
                </button>
              )}
            </div>
          </form>
        </>
      )}
    </>
  );
}
export default Participants;
