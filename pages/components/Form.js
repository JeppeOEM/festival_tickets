import { useState } from "react";

const Form = () => {
  const CheakoutData = [
    {
      fullname: "",
      age: "",
    },
  ];
  const [formFields, setFormFields] = useState(CheakoutData);
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  if (formFields.length === 4) {
  }
  const addFields = () => {
    let object = {
      fullname: "",
      age: "",
    };
    setFormFields([...formFields, object]);
  };
  // const removeField = (index) => {
  //   let data = [...formFields];
  //   data.splice(index, 1);
  //   setFormFields(data);
  // };
  const submit = (event) => {
    event.preventDefault();
    console.log("grab da data", formFields);
  };
  return (
    <>
      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <form onSubmit={submit}>
              <input name="fullname" placeholder="Participant Full Name" onChange={(event) => handleFormChange(event, index)} value={form.name} />
              <input name="age" placeholder="Participant age" onChange={(event) => handleFormChange(event, index)} value={form.age} />
              {/* <button onClick={() => removeField(index)}>delete participan</button> */}
            </form>
          </div>
        );
      })}
      <button onClick={addFields}>add participants</button>
      <button onClick={submit}>next</button>
    </>
  );
};

export default Form;
