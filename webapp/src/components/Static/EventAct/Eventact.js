import React from "react";
import "./../EventAct/Eventact.scss";
import Actbanner from "./../../../assets/eventBan.jpg";
import Advone from "./../../../assets/eva1.jpg";
import Advtwo from "./../../../assets/eva2.jpg";
import Advthree from "./../../../assets/eva3.jpg";
import Advfour from "./../../../assets/eva4.jpg";
import Advfive from "./../../../assets/adv5.jpg";
import Midbanner from "./../../../assets/adv_middle_banner.jpg";
import Abint1 from "./../../../assets/event1.jpg";
import Abint2 from "./../../../assets/event2.jpg";
import Abint3 from "./../../../assets/event3.jpg";


class Eventact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        <section className="eventBan"> 
            <img src={Actbanner} alt="ban" width="100%"/>
            <div className="bannerTxt">
                <div className="bnrMainTxt" >
                      <p>EVENTS ARE EXITEMENT , SO THE ACTIVITIES</p>
                </div>
                <p className="bnrSmlTxt">Some people look for a beautiful place. Others make a place beautiful and so the events.Nothing will work unless you do.The art of being wise is the art of knowing what to overlook.</p>
                <a type="button" className="gitEvent">Get in touch with us</a>
              </div>
        </section> 

        <section className="LatestBlog">
            <div className="blogStart">
                <div className="blogCap">
                    <p>Activities By Season</p>
                </div>
                <br/>
                <div className="blogList">
                    <img className="blogImg" src={Advone}/>
                    <b className="sml">From $300 </b>
                    <span>/ person</span>
                    <h2>
                        Activities in Summer
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Smith Jorse</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advtwo}/>
                    <b className="sml">From $299 </b>
                    <span>/ person</span>
                    <h2>
                        Activities in Spring
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Daniel Keats</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advthree}/>
                    <b className="sml">From $400 </b>
                    <span>/ person</span>
                    <h2>
                    Activities in Fall
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Nick Daves</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advfour}/>
                    <b className="sml">From $150 </b>
                    <span>/ person</span>
                    <h2>
                    Activities in Winter
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        <div className="blogAuth">
                            <pre className="auth">Guide: <b><i>Williams</i></b></pre>
                        </div>
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Advfive}/>
                    <b className="sml">From $374 </b>
                    <span>/ person</span>
                    <h2>
                        Any Season
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
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
                    Events By Interest
                </div>
                <div class="abiImages">
                    <div class="abiCont">
                        <img class="abiImg" src={Abint1}/>
                        <div class="bottom-left">Festivals and Concerts</div>
                    </div>
                    <div class="abiCont">
                        <img class="abiImg" src={Abint2}/>
                        <div class="bottom-left">What You can Enjoy Most</div>
                    </div>
                    <div class="abiCont">
                        <img class="abiImg" src={Abint3}/>
                        <div class="bottom-left">By Culture and Tradition</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    );
  }
}

export default Eventact;
