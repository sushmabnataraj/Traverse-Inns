import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty } from "lodash";
import { resetNotifications } from "../actions/notificationActions";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      open: false,
    });
    this.props.resetNotifications();
  };

  render() {
    const { open } = this.state;
    const { notification } = this.props;
    return (
      <>
        {!isEmpty(notification.message) && (
          <div>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              message={notification.message}
              action={
                <React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            >
              <Alert
                onClose={this.handleClose}
                severity={notification.severity}
              >
                {notification.message}
              </Alert>
            </Snackbar>
          </div>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      resetNotifications,
    },
    dispatch
  );

const mapStoreStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(NotificationContainer);
