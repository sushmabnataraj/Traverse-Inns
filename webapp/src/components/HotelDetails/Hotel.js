import React from "react";
import "./Hotel.scss";
import { withStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import {
  Typography,
  Container,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { getHotelDetails, saveBooking } from "../../API";
import moment from "moment";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  successNotification,
  errorNotification,
} from "../../actions/notificationActions";
import { isEmpty } from "lodash";
import TvIcon from "@material-ui/icons/Tv";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import FireplaceOutlinedIcon from "@material-ui/icons/FireplaceOutlined";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import HotTubIcon from "@material-ui/icons/HotTub";
import Rating from "@material-ui/lab/Rating";

const styles = () => ({
  root: {
    marginTop: "20px",
  },
  hotelTitle: {
    margin: "10px 0px",
  },
  hotelInfo: {
    margin: "10px 0px",
  },
  formButton: {
    marginTop: 10,
    backgroundColor: "Black",
    color: "white",
    padding: "0 30px",
    marginLeft: 100,
  },

  rating: {
    marginTop: 10,
  },
  bookingActionContainer: {
    boxShadow: "#0000001f 0px 6px 16px",
    border: "1px solid rgb(221, 221, 221)",
    borderRadius: "12px",
    padding: "24px",
    width: "400px",
  },
});

const client = {
  sandbox:
    "AeGdQCqJE6GG_w6VL4PuEy3VQE3QmKytm9bwGaNl6o-n1NVXs0WglOseDRqJi8ZGDdRlIr_uqoIgRZjG",
  production: "",
};

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      country: "",
      description: "",
      hotelImages: "",
      hotels: [],
      id: "",
      loc: { coordinates: [] },
      name: "",
      numberofRoomsAvailable: "",
      pricing: "",
      reviews: {
        cleanlinessRating: null,
        locationRating: null,
        numberOfReviews: null,
        overallRating: null,
        serviceRating: null,
      },
      website: "",
      checkInDate: moment().format("YYYY-MM-DD"),
      checkOutDate: moment().add(1, "days").format("YYYY-MM-DD"),
    };
  }

  componentDidMount() {
    const { hotelid = "" } = this.props.match.params;
    let url = getHotelDetails(hotelid);
    axios.get(url).then((res) => {
      this.setState({ ...res.data });
    });
  }

  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: data.value,
          },
        },
      ],
    });
  };

  onApprove = (data, actions) => {
    return actions.order.capture();
  };

  onSuccess = (payment) => {
    const { checkInDate, checkOutDate, id, name } = this.state;
    const { user } = this.props;
    const payload = {
      bookingDetails: {
        checkInDate,
        checkOutDate,
        id,
        name,
      },
      paypalData: payment,
      userid: user._id,
    };
    const URL = saveBooking();
    const config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    axios
      .post(URL, payload, config)
      .then((res) => {
        // Congratulation, it came here means everything's fine!
        this.props.successNotification("Payment successful");
        setTimeout(() => this.props.history.push("/"), 3000);
      })
      .catch((err) => {
        this.props.successNotification(
          "Payment done to paypal, something wrong went on our side"
        );
      });

    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  };

  onCancel = (data) => {
    // User pressed "cancel" or close Paypal's popup!
    console.log("The payment was cancelled!", data);
    this.props.errorNotification("The payment was cancelled!");
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  onError = (err) => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    this.props.errorNotification("Something went wrong");
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  loginUser = () => {
    this.props.history.push("/signIn");
  };

  render() {
    const {
      pricing,
      hotelImages,
      description,
      reviews,
      name,
      city,
      country,
      website,
      checkInDate,
      checkOutDate,
    } = this.state;
    const { classes, user } = this.props;
    const today = moment().format("YYYY-MM-DD");
    const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
    const n_days = moment
      .duration(moment(checkOutDate).diff(moment(checkInDate)))
      .asDays();
    const total_bill = n_days * pricing;
    const isUserLoggedIn = !isEmpty(user.token);
    return (
      <>
        <Container maxWidth="lg" className={classes.root}>
          <Typography variant="h3" className={classes.hotelTitle}>
            {name && (
              <a href={website} target="_blank" rel="noreferrer">
                {name} at {city}
              </a>
            )}
          </Typography>
          <Box display="flex" alignItems="center" className={classes.hotelInfo}>
            <Box display="flex" alignItems="center" className="mr-5">
              <StarIcon size="small" className="rating-icon" />
              <Typography variant="subtitle2" className="mr-5">
                {`${reviews.overallRating} (${reviews.numberOfReviews} reviews)`}
              </Typography>
            </Box>
            <Typography variant="subtitle2" className="mr-5">
              {country}
            </Typography>
          </Box>

          {/* <Typography variant="subtitle2">{description}</Typography> */}
          <div className="carousel-wrapper">
            <Carousel
              infiniteLoop
              useKeyboardArrows
              autoPlay
              showThumbs={false}
              dynamicHeight={false}
              interval={2000}
            >
              {hotelImages &&
                hotelImages.map((image, index) => {
                  return (
                    <div key={index}>
                      <img alt={name} src={image}></img>
                    </div>
                  );
                })}
            </Carousel>
          </div>
          <Box display="flex" justifyContent="space-between">
            <div>
              <Box display="flex" alignItems="center">
                <Typography variant="h3"> Location Rating:</Typography>
                {/* <Rating value={reviews.locationRating} readOnly /> */}
                <StarIcon className="rating-icon" />
                <Typography variant="h3">{reviews.locationRating}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="h3"> Service Rating:</Typography>
                <StarIcon className="rating-icon" />
                <Typography variant="h3">{reviews.serviceRating}</Typography>
              </Box>
              <div className="grid">
                <div className="cell-one">
                  <br />
                  <span className="descriptionstyle">{description}</span>
                  <br />
                  <br />
                  <div>
                    <span className="amenitiesClass">Amenities</span>
                    <ul className="ul1">
                      <li>
                        <TvIcon /> TV with standard cable
                      </li>
                      <li>
                        <WifiIcon /> Wifi
                      </li>
                      <li>
                        <LocalParkingIcon /> Free parking on premises
                      </li>
                      <li>
                        <AcUnitIcon /> Air conditioning
                      </li>
                      <li>
                        <FreeBreakfastIcon />
                        Free Breakfast
                      </li>
                      <li>
                        <LocalTaxiIcon /> Taxi Service
                      </li>
                      <li>
                        <FireplaceOutlinedIcon /> Indoor fireplace
                      </li>
                      <li>
                        <HotTubIcon /> Hot Tub
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.bookingActionContainer}>
              <Box
                display="flex"
                alignItems="center"
                className={classes.hotelInfo}
              >
                <Typography variant="h2" className="mr-5">
                  {pricing}$ per night
                </Typography>
                <Box display="flex" alignItems="center" className="mr-5">
                  <StarIcon size="small" className="rating-icon" />
                  <Typography variant="subtitle2" className="mr-5">
                    {`${reviews.overallRating} (${reviews.numberOfReviews} reviews)`}
                  </Typography>
                </Box>
              </Box>
              <div className="mt-10">
                <TextField
                  label="Check In Date"
                  fullWidth
                  type="date"
                  defaultValue={today}
                  onChange={(e) =>
                    this.setState({ checkInDate: e.target.value })
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="mt-15">
                <TextField
                  fullWidth
                  label="Check Out Date"
                  type="date"
                  defaultValue={tomorrow}
                  onChange={(e) =>
                    this.setState({ checkOutDate: e.target.value })
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Typography variant="body1" className="mt-15">
                Total Charges: {total_bill} $ *
              </Typography>
              <Typography variant="subtitle2">
                *Terms and conditions apply
              </Typography>
              <div className="mt-15">
                {/* Use this to generate fake credit card https://developer.paypal.com/developer/creditCardGenerator/ */}
                {isUserLoggedIn && (
                  <PaypalExpressBtn
                    client={client}
                    currency={"USD"}
                    total={total_bill}
                    onError={this.onError}
                    onSuccess={this.onSuccess}
                    onCancel={this.onCancel}
                  />
                )}
                {!isUserLoggedIn && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.loginUser}
                  >
                    Log in for booking
                  </Button>
                )}
              </div>
            </div>
          </Box>
        </Container>
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
      successNotification,
      errorNotification,
    },
    dispatch
  );

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Hotel));
