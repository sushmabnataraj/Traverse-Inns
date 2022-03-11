import React from "react";
import "./SignIn.scss";
import { Grid, Paper } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import { loginIn } from "../../API";
import {
  Button,
  Avatar,
  TextField,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
//Handling React Forms and Validation with Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
// this is used to connect to the store
import { connect } from "react-redux";
// this is used to send an action to the store
import { bindActionCreators } from "redux";
// function to change user object in store
import { retrieveUserAction } from "../../actions/userActions";
//function to change notification object in store
import { errorNotification } from "../../actions/notificationActions";

class SignIn extends React.Component {
  onSubmit = (values, props) => {
    const { email, password, remember } = values;
    const payload = {
      email,
      password,
    };
    const url = loginIn();
    axios
      .post(url, payload)
      .then((res) => {
        if (remember) {
          localStorage.setItem("travelapp-user", JSON.stringify(res.data));
        }
        this.props.retrieveUserAction(res.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        this.props.errorNotification("Something went wrong");
      });
    props.resetForm();
  };

  signup() {
    this.props.history.push("/signup");
  }

  render() {
    const initialValues = {
      email: "",
      password: "",
      remember: false,
    };
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Please enter valid email")
        .required("Required"),
      password: Yup.string().required("Required"),
    });
    return (
      <Grid className="signInContainer">
        <Paper elevation={10} className="paperstyle">
          <Grid align="center">
            <Avatar className="avatarstyle">
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h1">Sign In</Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  id="signinEmail"
                  name="email"
                  label="Email Address"
                  placeholder="Enter Email"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="email" />}
                ></Field>
                <Field
                  as={TextField}
                  id="signinPassword"
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                ></Field>
                <Box display="flex" alignItems="center">
                  <Field
                    as={Checkbox}
                    label="Remember me"
                    name="remember"
                    className="rememberMe"
                  ></Field>
                  <Typography>Remember me</Typography>
                </Box>
                <Button
                  disabled={props.isSubmitting}
                  type="submit"
                  color="primary"
                  variant="contained"
                  className="btnstyle"
                  fullWidth
                >
                  <Typography variant="h4">Sign In</Typography>
                </Button>
              </Form>
            )}
          </Formik>

          <div className="actions">
            <Typography variant="h4">
              {" "}
              Do you have an account ? <span className="cursorchange" onClick={()=>{this.signup()}} >Sign up</span>
            </Typography>
          </div>
        </Paper>
      </Grid>
    );
  }
}
//action is dispatched from signin
// retrieveUserAction, errorNotification will come in Signin props
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ retrieveUserAction, errorNotification }, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);

//connect(to send something on store, to get something from store...)
//Signin component will give information to another component
