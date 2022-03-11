import React from "react";
import "./pageNotFound.scss";
import { withRouter } from "react-router";

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoHome() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div class="mainbox">
        <div class="err">4</div>
        <div class="err1">0</div>
        <div class="err2">4</div>
        <div class="msg">
          Page Not Found
          <p>
            Let's go{" "}
            <a onClick={() => this.gotoHome()} href="">
              home
            </a>{" "}
            and try from there.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(PageNotFound);
