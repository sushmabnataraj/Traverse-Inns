import React from "react";
import { bindActionCreators } from "redux";
import { retrieveUserAction } from "../../actions/userActions";
import {
  successNotification,
  errorNotification,
} from "../../actions/notificationActions";
import { updatePassword } from "../../API";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import "./profile.scss";
import { isEmpty } from "lodash";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangePasswordSection: false,
      password: "",
      confirmPassword: "",
      passwordError: false,
      confirmPasswordError: false,
    };
  }

  componentDidMount() {
    const localStorageUser = JSON.parse(localStorage.getItem("travelapp-user"));
    if (!isEmpty(localStorageUser)) {
      this.props.retrieveUserAction(localStorageUser);
    } else {
      this.props.history.push("/signIn");
    }
  }

  showChangePwd = () => {
    this.setState({
      showChangePasswordSection: !this.state.showChangePasswordSection,
    });
  };

  changePassword = () => {
    const { password } = this.state;
    const { user } = this.props;
    const URL = updatePassword();
    const payload = {
      password,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    axios
      .patch(URL, payload, config)
      .then((res) => {
        this.props.successNotification("Password changed successfully");
      })
      .catch((err) => {
        this.props.errorNotification("Issue in changing password");
      });
  };

  render() {
    const { user } = this.props;
    const {
      showChangePasswordSection,
      passwordError,
      confirmPasswordError,
      password,
      confirmPassword,
    } = this.state;
    const showChangeButton =
      !passwordError &&
      !confirmPasswordError &&
      password === confirmPassword &&
      password.length > 0 &&
      confirmPassword.length > 0;

    return (
      <div className="bodyimg">
        <div className="container2">
          <span className="name">{user.name}</span>
          <br />
          <span className="email">{user.email}</span>
          <Button
            style={{
              marginTop: 10,
              backgroundColor: "#d90166",
              color: "white",
              padding: "0 30px",
              marginLeft: 150,
              width: 200,
            }}
            variant="contained"
            color="secondary"
            onClick={this.showChangePwd}
          >
            Change Password
          </Button>
          {showChangePasswordSection && (
            <>
              <TextField
                error={passwordError}
                fullWidth
                required
                id="standard-required"
                label="Password"
                type="password"
                defaultValue=""
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                  this.setState({
                    passwordError: e.target.value.length < 6,
                  });
                }}
              />
              <TextField
                fullWidth
                error={confirmPasswordError}
                required
                id="standard-required"
                label="Confirm Password"
                type="password"
                defaultValue=""
                onChange={(e) => {
                  this.setState({
                    confirmPassword: e.target.value,
                    confirmPasswordError: e.target.value.length < 6,
                  });
                }}
              />
              {showChangeButton && (
                <Button
                  style={{
                    marginTop: 10,
                    backgroundColor: "#d90166",
                    color: "white",
                    padding: "0 30px",
                    marginLeft: 150,
                    width: 200,
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={this.changePassword}
                >
                  Submit
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      retrieveUserAction,
      successNotification,
      errorNotification,
    },
    dispatch
  );

const mapStoreStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Profile);
