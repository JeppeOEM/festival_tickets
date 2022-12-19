import { useState, useRef } from "react";
import Cheackout from "./Checkout";
import { getData } from "/data/formdata";
import Areas from "../Areas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Forms(props) {
  const theForm = useRef(null);
  const [next, setNext] = useState(false);
  const [values, setValues] = useState({});
  const initialValues = {
    name: "",
    email: "",
    city: "",
    postcode: "",
    fulladdress: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    city: Yup.string().required("City is required"),
    postcode: Yup.number().required("Postcode is required").lessThan(40000, "Post code should not be more than 4 digits"),
    fulladdress: Yup.string().required("Full address is required"),
  });

  function handleSubmit(values, helpers) {
    console.log(values);
    // console.log(helpers);
    // console.log(values);
    setValues(values);
    setNext(true);
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setNext(true);
  //   // console.log("neww", values);
  // };

  let grab = props.id;
  return (
    <>
      {next ? (
        <Cheackout info={values} part={props.part} reservationID={grab} />
      ) : (
        <>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {(props) => {
              console.log(props);

              return (
                <Form ref={theForm}>
                  <div className="field">
                    <label>Name And Surname</label>
                    <Field name="name" />
                    <ErrorMessage name="name" />
                  </div>
                  <div className="field">
                    <label> Email Adresse</label>
                    <Field name="email" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="field">
                    <label> City </label>
                    <Field name="city" />
                    <ErrorMessage name="city" />
                  </div>
                  <div className="field">
                    <label>Post Code</label>
                    <Field name="postcode" />
                    <ErrorMessage name="postcode" />
                  </div>
                  <div className="field">
                    <label> fulladdress </label>
                    <Field name="fulladdress" />
                    <ErrorMessage name="fulladdress" />
                  </div>
                  <button type="submit">go to payment</button>
                </Form>
              );
            }}
          </Formik>
        </>
      )}
    </>
  );
}

export default Forms;
