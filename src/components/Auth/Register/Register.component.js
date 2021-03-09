import React from "react";
import { Button, Text, Box, Heading, Center } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Common/Formik/FormikControl";
import "./Register.component.css";
import { notify } from "./../../../util/toastr";
import { NavLink, useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory('/home')
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    notify.showSuccess(`Welcome ${values.username}`);

    onSubmitProps.resetForm();
    localStorage.setItem('loggedIn',true)
    history.push('/home')
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Provide valid email"),
    password: Yup.string().required("Required").min(6).max(40),
  });
  return (
    <Center>
      <Box maxW="xl" p="3%" h="75vh">
      <Heading as="h2" m="5%" color="orange">
        Let's Begin your Journey
      </Heading>
      <Text ml="5%" pb="2%" fontSize="3xl">
        Register
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="chakrainput"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="chakrainput"
                type="username"
                label="Username"
                name="username"
              />
              <FormikControl
                control="chakrainput"
                type="password"
                label="Password"
                name="password"
              />
              <Button
                mt={4}
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
      <p>Already have an account?</p>
      <NavLink to="/" style={{ color: "blue" }}>
        Login
      </NavLink>
    </Box>
    </Center>
  );
};
export default Register;
