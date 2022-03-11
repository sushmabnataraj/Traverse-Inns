import React from "react";
import "./../../scss/main.scss";
import "./../SectionPreference/Preferences.scss";
import Ehomes from "./../../assets/Adventure.jpg";
import Sstays from "./../../assets/scenic_spots.jpg";
import Ugetaways from "./../../assets/events_ar_u.jpg";
import Pallowed from "./../../assets/act_ar_u.jpg";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  routeChange = () => {
    const vnmae = this.state;
    this.props.history.push("/adventure");
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  routeChangeAll = () => {
    const vnmae = this.state;
    this.props.history.push("/all");
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  routeChangeEventact = () => {
    const vnmae = this.state;
    this.props.history.push("/eventActivities");
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  routeChangeScenic = () => {
    const vnmae = this.state;
    this.props.history.push("/scenicStays");
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    // const { classes } = this.props;
    return (
      <section className="preferenceBlock">
        <div className="prefContent">
          <div className="prefTitle">
            {/* <p> Explore to Experience</p> */}
            <Typography variant="h1">Explore to Experience</Typography>
          </div>
          <div className="preferenceTypes">
            <div className="colEh" onClick={this.routeChange}>
              <img className="preferencesImage" src={Ehomes} />
              <h2>Adventurous</h2>
              <p>
                Traveling is not an easy task. A lot of times, you just feel down and lonely and question 
                if it’s really worth it (spoiler alert – yes it is). Reading adventure quotes have always helped 
                me in those times. It’s strange how just a few words can change your mood entirely and let you see things 
                from another perspective.
              </p>
            </div>
            <div className="colSs" onClick={this.routeChangeScenic}>
              <img className="preferencesImage" src={Sstays} />
              <h2>Scenic Spots</h2>
              <p>
                The word scenery made be think of a play. And as we were driving around, it made sense that way. 
                Because no matter how much the scenery changed, we were still on the same stage.
                The really happy person is the one who can enjoy the scenery, even when they have to take a detour.
              </p>
            </div>
            <div className="colUs" onClick={this.routeChangeEventact}>
              <img className="preferencesImage" src={Ugetaways} />
              <h2>Events and Activities</h2>
              <p>
              You’re planning an important event and you’ve run into a problem. You’ve done all the word-of-mouth promoting 
              you can do and need to approach your email list, but you don’t know where to start.What makes a potential attendee
              actually open an email about your event?  
              </p>
            </div>
            <div className="colPa" onClick={this.routeChangeAll}>
              <img className="preferencesImage" src={Pallowed} />
              <h2>Check out all</h2>
              <p>
              You need not even listen, just wait…the world will offer itself freely to you, unmasking itself.
              We wander for distraction, but we travel for fulfilment.We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have
               if only we seek them with our eyes open.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
// This will include function of withrouter inside preferences as props
export default withRouter(Preferences);
