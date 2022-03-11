import { Card } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CardActionArea } from "@material-ui/core";
import {
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./ExploreNearby.scss";
import { withRouter } from "react-router-dom";

//Defined styles for material UI components
const styles = (theme) => ({
  root: {
    background: "#FFFFFF",
    "&:hover": {
      opacity: 0.7,
    },
    height: "100%",
  },
  media: {
    height: 140,
  },
});

//Created a Component for Card and passing the values in this card from index.js
class CardComponent extends React.Component {
  
  //Defined a function to redirect to hotel details route on button click
  showHotelDesc = () => {
    const { id } = this.props;
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    this.props.history.push(`/hotel/${id}`);
  };

  render() {
    const { hotelname, imagesrc, description, classes } = this.props;

    return (
      <Card className={classes.root} onClick={this.showHotelDesc}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imagesrc} />
          <CardContent>
            {/* used Typography component to standardize the text and its related CSS properties */}
            <Typography gutterBottom variant="h3">
              {hotelname}
            </Typography>
            <Typography variant="h5" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
//exporting the Card component so that it can be imported on required pages.
export default withRouter(withStyles(styles)(CardComponent));
