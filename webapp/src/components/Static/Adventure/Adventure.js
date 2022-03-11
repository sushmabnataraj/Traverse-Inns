import React from "react";
import "./../Adventure/Adventure.scss";
import Advbanner from "./../../../assets/Adventurous.jpg";
import Advone from "./../../../assets/adv1.jpg";
import Advtwo from "./../../../assets/adv2.jpg";
import Advthree from "./../../../assets/adv3.jpg";
import Advfour from "./../../../assets/adv4.jpg";
import Advfive from "./../../../assets/adv5.jpg";
import Midbanner from "./../../../assets/adv_middle_banner.jpg";
import Abint1 from "./../../../assets/abi1.jpg";
import Abint2 from "./../../../assets/abi2.jpg";
import Abint3 from "./../../../assets/abi3.jpg";


class Adventure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        <section className="secBanner"> 
            <img src={Advbanner} alt="ban" width="100%"/>
            <div className="bannerTxt">
                <div className="bnrMainTxt" >
                      <p>INTRODUCING...</p>
                </div>
                <p className="bnrSmlTxt">Adventures - Multi-day trips led by local experts—activities, meals, and stays included. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a type="button" className="git">Get in touch with us</a>
              </div>
        </section> 

        <section className="LatestBlog">
            <div className="blogStart">
                <div className="blogCap">
                    <p>Adventures in budget</p>
                </div>
                <br/>
                <div className="blogList">
                    <img className="blogImg" src={Advone}/>
                    <b className="sml">From $300 </b>
                    <span>/ person</span>
                    <h2>
                        Rock Climbing
                    </h2>
                    <p>Rock climbing is an activity in which participants climb up, down or across natural rock formations or 
                        artificial rock walls.
                        </p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Smith Jorse</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advtwo}/>
                    <b className="sml">From $299 </b>
                    <span>/ person</span>
                    <h2>
                        Trekking on trails
                    </h2>
                    <p>Bushwhacking is the process of travelling off-trail, sometimes through dense trees, 
                        branches and bushes.
                        </p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Daniel Keats</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advthree}/>
                    <b className="sml">From $400 </b>
                    <span>/ person</span>
                    <h2>
                        Bungee Jumping
                    </h2>
                    <p>Bungee jumping, is an activity that involves a person jumping from a great height while connected to a large elastic cord.</p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Nick Daves</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advfour}/>
                    <b className="sml">From $150 </b>
                    <span>/ person</span>
                    <h2>
                        Camp in Woods
                    </h2>
                    <p>Camping in the middle of the woods. The woods/backcountry can be a 
                        difficult place to camp if you are not prepared issue.</p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Williams</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advfive}/>
                    <b className="sml">From $374 </b>
                    <span>/ person</span>
                    <h2>
                        Hike and Meet Wildlife
                    </h2>
                    <p>Wildlife Encounters. Make noise. Travel in groups. Don't wear headphones.
                        Pay attention to smells.</p>
                    <div className="blogAuth">
                        <pre className="auth">Guide: <b><i>Peter</i></b></pre>
                    </div>
                </div>
            </div>
            <div className="showAll">
                <a href="#">Show more...</a>
            </div>
        </section>


        <div class="mid_banner">
            <img  src={Midbanner} alt="ban" width="100%"/>
        </div>
        <div class="abiWarpper">
            <div class="advByInt">
                <div class="abiCap">
                    Adventures By Interest
                </div>
                <div class="abiImages">
                    <div class="abiCont">
                        <img class="abiImg" src={Abint1}/>
                        <div class="bottom-left">Active and Sporty</div>
                    </div>
                    <div class="abiCont">
                        <img class="abiImg" src={Abint2}/>
                        <div class="bottom-left">Ride on animals</div>
                    </div>
                    <div class="abiCont">
                        <img class="abiImg" src={Abint3}/>
                        <div class="bottom-left">Fishing and Boating</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    );
  }
}

export default Adventure;
