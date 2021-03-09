import React from "react";
import { notify } from "./../../../util/toastr";

import "./Login.component.css";
import { Button, Text, Box, Heading, Center } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Common/Formik/FormikControl";
import { NavLink, useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
    class: "",
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
    password: Yup.string().required("Required").min(6),
  });

  return (
    <Center>
      <Box maxW="xl" p="4%" h="75vh">
      <Heading as="h2" m="5%" color="orange">
        Hey!! Want To Check your G.K 
      </Heading>
      <Text ml="5%" pb="2%" fontSize="3xl">Login Here</Text>
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
      <p>Don't have an account?</p><NavLink style={{color:'blue'}} to="/register">Register</NavLink>
    </Box>
    </Center>
  );
};
export default Login;
