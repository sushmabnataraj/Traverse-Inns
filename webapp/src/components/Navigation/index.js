import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOutUserAction } from "../../actions/userActions";
import "./Navbar.scss";
import LogoMain from "./../../assets/Logo_with_Name.png";

const styles = (theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
  },
  home: {
    cursor: "pointer",
  },
  btnNav: {
    borderRadius: "5px",
  },
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  signUp() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    this.props.history.push("/signup");
    this.setState({
      anchorEl: null,
    });
   
  }

  signIn() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    this.props.history.push("/signin");
    this.setState({
      anchorEl: null,
    });
  }

  gotoHome() {
    this.props.history.push("/");
  }

  showProfile() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    this.props.history.push("/profile");
    this.setState({
      anchorEl: null,
    });
  }

  myBookings() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    this.props.history.push("/myBookings");
    this.setState({
      anchorEl: null,
    });
  }

  logout() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    this.props.history.push("/");
    localStorage.removeItem("travelapp-user");
    this.props.logOutUserAction();
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const { classes, user } = this.props;
    const { anchorEl } = this.state;
    return (
      <>
        <AppBar position="sticky">
          <Toolbar className={classes.root}>
            <Grid container justify="space-between" alignItems="center">
              <Typography
                onClick={() => this.gotoHome()}
                variant="h2"
                className={classes.home}
              >
                <img className="logoMain" src={LogoMain} />
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                aria-controls="fade-menu"
                aria-haspopup="true"
                className={classes.btnNav}
                startIcon={
                  <Box
                    component="span"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h5">{user.name}</Typography>
                    <MenuIcon />
                    <AccountCircleIcon />
                  </Box>
                }
                onClick={this.handleClick}
              ></Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                elevation={1}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                {!user.token && (
                  <MenuItem onClick={() => this.signUp()}>
                    <Typography variant="h4">Sign Up</Typography>
                  </MenuItem>
                )}
                {!user.token && (
                  <MenuItem onClick={() => this.signIn()}>
                    <Typography variant="h4">Sign In</Typography>
                  </MenuItem>
                )}
                {user.token && (
                  <MenuItem onClick={() => this.showProfile()}>
                    <Typography variant="h4">My Profile</Typography>
                  </MenuItem>
                )}
                {user.token && (
                  <MenuItem onClick={() => this.myBookings()}>
                    <Typography variant="h4">My Bookings</Typography>
                  </MenuItem>
                )}
                {user.token && (
                  <MenuItem onClick={() => this.logout()}>
                    <Typography variant="h4">Logout</Typography>
                  </MenuItem>
                )}
              </Menu>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

const mapStoreStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logOutUserAction,
    },
    dispatch
  );

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Navigation)));
