import { useState } from "react";
import Cheackout from "./Checkout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import StyleSheet from "../../styles/pages/tickets.module.scss";

function FormInfo(props) {
  //NEXT BUTTON
  const [next, setNext] = useState(false);
  // FIELD DATA
  const [values, setValues] = useState({});
  const initialValues = {
    name: "",
    email: "",
    city: "",
    postcode: "",
    fulladdress: "",
  };
  // FORM VALIDATION YUP
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("<p>Full name is required</p>"),
    email: Yup.string().email().required("Email is required"),
    city: Yup.string().required("City is required"),
    postcode: Yup.number()
      .required("Postcode is required")
      .test("maxDigits", "post code must be 4 digits", (number) => String(number).length === 4),
    fulladdress: Yup.string().required("Full address is required"),
  });

  function handleSubmit(values) {
    setValues(values);
    setNext(true);
  }
  return (
    <>
      {next ? (
        <Cheackout info={values} part={props.part} />
      ) : (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {(props) => {
            console.log(props);

            return (
              <Form className={StyleSheet.form}>
                <div className={StyleSheet.fieldColumn}>
                  <label>Name And Surname</label>
                  <Field name="name" className={StyleSheet.input} />
                  <ErrorMessage name="name" className={StyleSheet.error} />
                </div>
                <div className={StyleSheet.fieldColumn}>
                  <label> Email Adresse</label>
                  <Field name="email" className={StyleSheet.input} />
                  <ErrorMessage name="email" />
                </div>
                <div className={StyleSheet.fieldColumn}>
                  <label> City </label>
                  <Field name="city" className={StyleSheet.input} />
                  <ErrorMessage name="city" className={StyleSheet.error} />
                </div>
                <div className={StyleSheet.fieldColumn}>
                  <label>Post Code</label>
                  <Field name="postcode" className={StyleSheet.input} />
                  <ErrorMessage name="postcode" className={StyleSheet.error} />
                </div>
                <div className={StyleSheet.fieldColumn}>
                  <label> fulladdress </label>
                  <Field name="fulladdress" className={StyleSheet.input} />
                  <ErrorMessage name="fulladdress" className={StyleSheet.error} />
                </div>
                <button type="submit" className={StyleSheet.button}>
                  go to payment
                </button>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
}

export default FormInfo;
