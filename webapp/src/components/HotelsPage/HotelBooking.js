import { Card } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CardActionArea } from "@material-ui/core";
import {
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import Hotel from "../HotelDetails/Hotel";
import StarIcon from "@material-ui/icons/Star";

const styles = (theme) => ({
  root: {
    height: "100%",
    background: "#FFFFFF",
    "&:hover": {
      background: "#b9b9b9",
    },
  },
  media: {
    height: 180,
  },
  description: {
    whiteSpace: "nowrap",
    width: "300px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  price: {
    fontWeight: "800",
  },
  iconColor: { color: "orange" },
});
class HotelBooking extends React.Component {
  showHotelDesc = () => {
    const { hotelid } = this.props;
    this.props.history.push(`/hotel/${hotelid}`);
  };

  render() {
    const {
      hotelname,
      imagesrc,
      description,
      classes,
      hotellink,
      hotelid,
      cityname,
      price,
      reviews,
    } = this.props;

    return (
      <Card className={classes.root} onClick={this.showHotelDesc}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imagesrc}
            title={hotelname}
          ></CardMedia>
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom>
            {hotelname} at {cityname}
          </Typography>
          {/* <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="div"
          >
            {description}
          </Typography> */}
          <Typography variant="h4" gutterBottom>
            Price: ${price}/night
          </Typography>
          <Box display="flex" alignItems="center" className="mr-5">
            <StarIcon size="small" className="rating-icon" />
            <Typography variant="subtitle2" className="mr-5">
              {`${reviews.overallRating} (${reviews.numberOfReviews} reviews)`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(withStyles(styles)(HotelBooking));
