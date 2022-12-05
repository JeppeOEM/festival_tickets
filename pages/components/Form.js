import { useState } from "react";

const Form = () => {
  const CheakoutData = [
    {
      fullname: "",
      age: "",
    },
  ];
  const [formFields, setFormFields] = useState(CheakoutData);
  const handleFormChange = (e, index) => {
    let data = [...formFields];
    data[index][e.target.name] = e.target.value;
    setFormFields(data);
  };
  if (formFields.length === 4) {
  }
  const addFields = () => {
    let object = {
      age: "",
    };
    setFormFields([...formFields, object]);
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
  return (
    <>
      {formFields.map((form, index) => {
        return (
          <div key={index}>
            <form onSubmit={submit}>
              <input name="fullname" placeholder="Participant Full Name" onChange={(e) => handleFormChange(e, index)} value={form.name} />
              <input name="age" placeholder="Participant age" onChange={(e) => handleFormChange(e, index)} value={form.age} />
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
