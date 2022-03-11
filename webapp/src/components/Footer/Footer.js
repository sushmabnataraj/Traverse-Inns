import React from "react";
import "./../../scss/main.scss";
import "./Footer.scss";
import FGlobe from "./../../assets/globe_yellow.png";
import Ffacebook from "./../../assets/facebook_ylw.png";
import Ftwitter from "./../../assets/twitter.png";
import Finstagram from "./../../assets/instagram_ylw.png";
import LogoBtm from "./../../assets/Logo_grey.png";


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer className="ftr">    
            <div className="ftrbody">            
                    <section className="aboutFt">
                        <b>ABOUT</b>
                        <div className="ftSL">
                            <li>How we work</li>
                            <li>Our News Room</li>
                            <li>Company Luxes</li>
                            <li>Career with us</li>
                            <li>What you speak about us?</li>
                        </div>
                    </section>
                    <section className="commFt">
                        <b>Our Community</b>
                        <div className="ftSL">
                            <li>Help Center for Cancellations</li>
                            <li>Guest Referals</li>
                            <li>Gift Vouchers</li>
                            <li>Our Associates</li>
                            <li>Resourse Center</li>
                        </div>
                    </section>
                    <section className="footCntct">
                        <b>Contact</b>
                        <div className="ftSL">
                            <li>Phone : +1 987 654 3210</li>
                            <li>Email : info@traverseinns.com</li>
                            <li>Fax : +1 234 567 8901</li>
                        </div>
                    </section>
                    <section className="footCompdet">
                        <div><img className="logoBtm" src={LogoBtm} /></div>
                        <p>When you come to a hotel room, you want it to be grand, functional and beautiful. 
                            Sometimes you go to hotels and there are all these frames and pictures of people you don't know, and you end up hiding everything in the drawer, and then housekeeping come and put it out again.
                        </p>
                    </section>
                </div>
            <div className="ftrtail">
                <div className="copyRights">
                    <div className="leftCR">
                        <p><small>&copy;{new Date().getFullYear()}, <strong className="cpyStrg">Traverse Inns Inc.</strong></small></p>
                        <pre className="lastLine">
                            ,    |  <a>Privacy</a>  |  <a>Terms </a> |  <a>Sitemap</a>
                        </pre>
                    </div>
                </div>
                <div className="socialTags">
                    <div className="rightCR">
                    
                            <div className="footerImg">
                                <img src={FGlobe} alt="globe-yellow" height="20px" width="20px"/>                
                            </div>
                            <span className="lang">English(US)</span>
                            <div className="facebook">
                                <img src={Ffacebook} alt="globe-yellow" height="20px" width="20px"/>                
                            </div>
                            <div className="twitter">
                                <img src={Ftwitter} alt="globe-yellow" height="20px" width="20px"/>                
                            </div>
                            <div className="instagram">
                                <img src={Finstagram} alt="globe-yellow" height="20px" width="20px"/>                
                            </div>
                    </div>
                </div>
            </div> 
    </footer> 
    );
  }
}

export default Footer;
