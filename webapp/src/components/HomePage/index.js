import React from "react";
import { Tabs, Tab, Box, Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BannerImg from "./../../assets/bannerImg.jpg";
import HotelsSearch from "../HotelsSearch";
import ExploreNearby from "../ExploreNearby";
import Preferences from "../SectionPreference/Preferences";
import Footer from "../Footer/Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const styles = (theme) => ({
  root: {
    background:
      // "url(https://a.travel-assets.com/travel-assets-manager/55ba0ade-3f4b-4018-908c-dacdd8933227/SEA_Mar_May_storefront_1680x485.jpg?impolicy=fcrop&w=1680&h=485&q=medium)",
      `url(${BannerImg})`,
    padding: "150px 0px 100px 0px",
    minHeight: "300px",
    maxHeight: "400px",
    backgroundRepeat: "no-repeat",
  },
  container: {
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "1px 5px 10px rgba(0, 0, 0, 0.35)",
  },

  banTitle: {
    fontSize: "50px",
    padding: "25px 0px",
  },

  subTitle: {
    fontSize: "20px",
    textAlign: "center",
    color: "#fafafa",
    paddingBottom: "30px",
  },

  banText: {
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
  },
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  changeTabs = (e, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <>
        <div className={classes.root}>
          <div className={classes.banText}>
            <Typography
              variant="h1"
              color="secondary"
              className={classes.banTitle}
            >
              "Discover the difference"
            </Typography>

            <Typography variant="h3" className={classes.subTitle}>
              Your definition of good hospitality should be where you would stay
              at. So, we are here caring your comfortableness and help you to go
              on a perfect vacation - Book with us!
            </Typography>
          </div>
          <Container maxWidth="lg" className={classes.container}>
            <Tabs
              value={value}
              onChange={this.changeTabs}
              centered
              variant="fullWidth"
              indicatorColor="primary"
            >
              <Tab label="Hotels" />
              {/* <Tab label="Flights" />
              <Tab label="Rentals" /> */}
            </Tabs>
            <TabPanel value={value} index={0}>
              <HotelsSearch />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Flights component should come here
            </TabPanel>
            <TabPanel value={value} index={2}>
              Rentals component should come here
            </TabPanel>
          </Container>
        </div>
        <ExploreNearby />
        <Preferences></Preferences>
      </>
    );
  }
}

export default withStyles(styles)(HomePage);
