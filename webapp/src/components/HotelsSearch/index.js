import React from "react";
import { FormControl, TextField, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { searchCities } from "../../API";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withRouter } from "react-router";

const styles = () => ({
  search: {
    marginTop: "20px",
  },
});

class HotelsSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      checkInDate: "",
      checkOutDate: "",
      suggestedCities: [],
      selectedCity: "",
    };
  }
  //call get method from hotels API
  searchLocation = (value) => {
    this.setState({
      location: value,
    });
    let url = searchCities(value);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          suggestedCities: data,
        });
      });
  };

  searchCheckInDate = (value) => {
    this.setState({
      checkInDate: value,
    });
  };

  searchCheckOutDate = (value) => {
    this.setState({
      checkOutDate: value,
    });
  };
// selectedCity will get the city name from the state, and saved in the props for this component
  searchHotels = () => {
    const { selectedCity } = this.state;
    if(selectedCity) {
      this.props.history.push(`/hotels/${selectedCity}`);
    } else
    {
      this.props.history.push(`/hotels`);
    }
    
  };

  selectCityFromSuggestions = (value) => {
    this.setState({
      selectedCity: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { suggestedCities } = this.state;
    return (
      <>
      {/* Grid contains the search dropdown, checkin, checoutdate  */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <Autocomplete
                id="list-of-cities"
                options={suggestedCities}
                // getOptionLabel={(option)}
                style={{ width: 300 }}
                renderInput={(params) => (
                  // textfield for typing cityname and onclick searchLocation function is called with cityname as parameter
                  <TextField
                    {...params}
                    label="Type a location"
                    fullWidth
                    ref={params.InputProps.ref}
                    onChange={(e) => this.searchLocation(e.target.value)}
                  />
                )}
                onChange={(e, value) => this.selectCityFromSuggestions(value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="checkinDate"
                label="Check In"
                type="date"
                defaultValue="2021-05-25"
                onChange={(e) => this.searchCheckInDate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="checkoutDate"
                label="Check Out"
                type="date"
                defaultValue="2021-05-30"
                onChange={(e) => this.searchCheckOutDate(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.search}>
          {/* on click of search button, function searchHotels will be called */}
          <Button
            variant="contained"
            color="primary"
            className={classes.search}
            onClick={this.searchHotels}
          >
            Search
          </Button>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(HotelsSearch));
