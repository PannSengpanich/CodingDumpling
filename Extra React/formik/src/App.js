import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "a",
  email: "",
  channel: "",
  comment: "",
  address: "",
};

const onSubmit = (values) => {
  console.log("Form values are ", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  channel: Yup.string().required("Channel is required"),
});
function App() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="channel">Channel:</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <Field as="textarea" id="comment" name="comment" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              console.log("Render props", props);
              return <input id="address"></input>;
            }}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default App;
