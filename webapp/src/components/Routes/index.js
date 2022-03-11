import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import HomePage from "../HomePage";
import HotelsPage from "../HotelsPage";
import Hotel from "../HotelDetails/Hotel";
import Card from "../ExploreNearby/Card";
import Adventure from "../Static/Adventure/Adventure";
import All from "../Static/All/All";
import Eventact from "../Static/EventAct/Eventact";
import Scenic from "../Static/Scenic/Scenic";
import Profile from "../Profile/index";
import MyBookings from "../MyBookings";
import PageNotFound from "../PageNotFound/pageNotFound";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/signin" />
          </Route> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/hotels/:cityname" component={HotelsPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/hotels" component={HotelsPage} />
          <Route exact path="/hotel/:hotelid" component={Hotel} />
          <Route exact path="/myBookings" component={MyBookings} />
          {/* //Adventure page routes */}
          <Route exact path="/adventure" component={Adventure} />
          <Route exact path="/all" component={All} />
          <Route exact path="/eventActivities" component={Eventact} />
          <Route exact path="/scenicStays" component={Scenic} />

          {/* This shoud be last route */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default Routes;
