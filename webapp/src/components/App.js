import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { retrieveUserAction } from "../actions/userActions";
import Navigation from "./Navigation";
import Routes from "./Routes";
import NotificationContainer from "../containers/NotificationContainer";
import "./App.scss";
import Footer from "./Footer/Footer";

class App extends React.Component {
  async componentDidMount() {
    const localStorageUser = await JSON.parse(
      localStorage.getItem("travelapp-user")
    );
    if (!isEmpty(localStorageUser)) {
      this.props.retrieveUserAction(localStorageUser);
    }
  }
  render() {
    return (
      <>
        <NotificationContainer />
        <Router>
          <Navigation />
          <Routes />
        </Router>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      retrieveUserAction,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(App);
