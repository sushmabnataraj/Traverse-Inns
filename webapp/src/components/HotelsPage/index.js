import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  FormControl,
  Select,
  InputLabel,
  Container,
  Box,
} from "@material-ui/core";
import React from "react";
import { searchHotels } from "../../API";
import { withStyles } from "@material-ui/core/styles";
import HotelMap from "./../HotelMap/hotelMap";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HotelBooking from "../HotelsPage/HotelBooking";

const styles = () => ({
  root: {
    marginTop: "15px",
  },
  hotelList: {
    marginTop: "20px",
    marginLeft: "30px",
  },
  media: {
    height: 140,
  },
  map: {
    position: "fixed",
    right: "0px",
    marginLeft: "0px",
    marginTop: "0px",
  },
  filters: {
    marginBottom: "10px",
    marginTop: "20px",
  },
  noResults: {
    fontSize: "40px",
    textAlign: "center",
  },
});

class HotelsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      filters: " ",
    };
  }

  componentDidMount() {
    this.getAllHotels();
  }

  getAllHotels() {
    const { history } = this.props;
    const pathname = history.location.pathname;
    const cityname = pathname.replace("/hotels", "");
    let url = searchHotels(cityname) + this.state.filters;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          hotels: data,
        });
      });
  }

  handleChange = (event) => {
    let query;
    const name = event.target.name;

    this.setState(
      {
        filters: event.target.value,
        //  [name]: event.target.value,
      },
      () => {
        this.getAllHotels();
      }
    );
  };

  render() {
    const { hotels } = this.state;
    const { classes } = this.props;
    const { history } = this.props;
    const pathname = history.location.pathname;
    const cityname = pathname.replace("/hotels/", "");
    return (
      <div>
        <Container maxWidth="lg" className={classes.root}>
          <div>
            <Typography variant="h1" gutterBottom>
              Hotels in {cityname}
            </Typography>
            <div className={classes.filters}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Price
                </InputLabel>
                <Select
                  native
                  value={this.state.filters}
                  onChange={this.handleChange}
                  name={this.state.filters}
                  label="dssdfsddds"
                >
                  <option aria-label="None" value="" />
                  <option value={`?pricemin=0&pricemax=100`}>$0 - $100</option>
                  <option value={`?pricemin=100&pricemax=200`}>
                    $100 - $200
                  </option>
                  <option value={`?pricemin=200`}>More than $200</option>
                </Select>
              </FormControl>
            </div>
          </div>
          {hotels.length > 0 && (
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Grid container spacing={2}>
                  {hotels.map((hotel, index) => {
                    return (
                      <Grid item key={index} xs={6}>
                        <HotelBooking
                          hotellink={hotel.website}
                          hotelname={hotel.name}
                          description={hotel.description}
                          imagesrc={hotel.hotelImages[0]}
                          hotelid={hotel.id}
                          price={hotel.pricing}
                          cityname={hotel.city}
                          reviews={hotel.reviews}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item md={6}>
                {hotels && <HotelMap hoteldata={hotels}></HotelMap>}
              </Grid>
            </Grid>
          )}
          {hotels.length === 0 && (
            <Typography className={classes.noResults}>
              Sorry! No results found..seems you have a unique taste.
            </Typography>
          )}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(HotelsPage);
