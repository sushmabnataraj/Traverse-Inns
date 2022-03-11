import React from "react";
import "./ExploreNearby.scss";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { Container } from "@material-ui/core";
import axios from "axios";
import { getAllHotels } from "../../API";

class ExploreNearby extends React.Component {
  constructor(props) {
    super(props);
    //defined state with empty array of hotels
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    //fetched all the hotels from API
    let url = getAllHotels();
    axios
      .get(url)
      .then((res) => {
        this.setState({
          hotels: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          hotels: [],
        });
      });
  }

  render() {
    const { hotels } = this.state;

    return (
      <>
        {/* Container component centers the content horizontally */}
        <Container maxWidth="lg">
          <Typography variant="h1" className="nearbyplaceTitle">
            Explore Nearby Places
          </Typography>
          {/* Using a grid component where grid container contains grid items */}
          <Grid container spacing={2}>
            {hotels.map((hotel, index) => {
              if (index <= 3) {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    {/* passing the details of hotels to card component */}
                    <Card
                      hotellink={hotel.website}
                      hotelname={hotel.name}
                      description={hotel.description}
                      imagesrc={hotel.hotelImages[0]}
                      id={hotel.id}
                    ></Card>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Container>
      </>
    );
  }
}

export default ExploreNearby;
