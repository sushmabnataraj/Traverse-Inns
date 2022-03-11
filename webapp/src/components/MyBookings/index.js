import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getBookings } from "../../API";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    marginTop: "20px",
  },
});

class MyBookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: [],
    };
  }

  async componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    const userid = user["_id"];
    const URL = getBookings(userid);
    const config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    axios
      .get(URL, config)
      .then((res) => {
        this.setState({
          bookingData: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          bookingData: [],
        });
      });
  }

  render() {
    const { bookingData } = this.state;
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <Typography variant="h1">My Bookings</Typography>
        <Grid container spacing={2} className={classes.root}>
          {bookingData.length > 0 &&
            bookingData.map((data) => {
              return (
                <Grid item key={data.id} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography
                        //className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {data.bookingDetails.name}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        CheckIn Date : {data.bookingDetails.checkInDate}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        CheckOut Date : {data.bookingDetails.checkOutDate}
                      </Typography>
                      <Typography color="textSecondary" variant="subtitle2">
                        Payment done through paypal
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          {bookingData.length === 0 && (
            <Typography variant="h2">No bookings done yet!</Typography>
          )}
        </Grid>
      </Container>
    );
  }
}

const mapStoreStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStoreStateToProps,
  null
)(withStyles(styles)(MyBookings));
