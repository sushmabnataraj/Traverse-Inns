import React from "react";
import "./SignUp.scss";
import {
  Avatar,
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { createUser } from "../../API";
import { createUserAction } from "../../actions/userActions";
import {
  successNotification,
  errorNotification,
} from "../../actions/notificationActions";
import axios from "axios";

class SignUp extends React.Component {
  userCreated = (data) => {
    this.props.createUserAction(data);
    this.props.successNotification("User created");
    this.props.history.push("/");
  };

  showError = (message) => {
    this.props.errorNotification(message);
  };

  submitForm = (values, props) => {
    const name = values.name;
    const email = values.email;
    const password = values.password;
    const payload = {
      name,
      email,
      password,
    };
    let url = createUser();
    axios
      .post(url, payload)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("travelapp-user", JSON.stringify(res.data));
          this.userCreated(res.data);
        } else {
          console.log("No token is sent from API");
        }
      })
      .catch(() => {
        this.showError("Something went wrong! try again");
      });
  };

  render() {
    const tandc = { margin: "20px 0px" };
    const initialValues = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
    };

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("Please enter valid email")
        .required("Required"),
      password: Yup.string()
        .min(7, "Password minimum lengthshould be 7 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("Required"),
      termsAndConditions: Yup.string().oneOf(
        ["true"],
        "Accept terms & conditions"
      ),
    });

    return (
      <Grid className="signUpContainer">
        <Paper elevation={20} className="signUpPaper">
          <Grid align="center">
            <Avatar>
              <AddCircleSharpIcon />
            </Avatar>
            <Typography variant="h2">Sign Up</Typography>
            <Typography variant="caption">
              Please fill this form to create an account
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={this.submitForm}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Name"
                  name="name"
                  placeholder="Enter name"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="NAME" />}          
                ></Field>
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="email" />}
                  // onChange={(e) => {
                  //   this.setState({ email: e.target.value });
                  // }}
                ></Field>
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  fullWidth
                  required
                  type="password"
                  helperText={<ErrorMessage name="password" />}
                  // onChange={(e) => {
                  //   this.setState({ password: e.target.value });
                  // }}
                ></Field>
                <Field
                  as={TextField}
                  label="Confirm Password"
                  name="confirmPassword"
                  placeholder="Re-enter password"
                  fullWidth
                  required
                  type="password"
                  helperText={<ErrorMessage name="confirmPassword" />}
                  // onChange={(e) => {
                  //   this.setState({ confirmPassword: e.target.value });
                  // }}
                ></Field>
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I accept the terms and conditions"
                  style={tandc}
                  id="user_accepted_tc"
                  onChange={this.acceptTC}
                />
                <FormHelperText>
                  <ErrorMessage name="termsAndConditions" />
                </FormHelperText>
                <br />
                {/* {isFormValid && ( */}
                <Button
                  disabled={props.isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  //onClick={this.submitForm}
                >
                  Sign up
                </Button>
                {/* )} */}
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createUserAction,
      successNotification,
      errorNotification,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
