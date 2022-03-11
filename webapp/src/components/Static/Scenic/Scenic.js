import React from "react";
import "./../Adventure/Adventure.scss";
import Scebanner from "./../../../assets/scenic_banner.jpg";
import Scene2 from "./../../../assets/sce1.jpg";
import Scene3 from "./../../../assets/sce2.jpg";
import Scene4 from "./../../../assets/sce3.jpg";
import Scene5 from "./../../../assets/sce4.jpg";
import Scene1 from "./../../../assets/sce5.jpg";
import Midbanner from "./../../../assets/adv_middle_banner.jpg";
import Scene6 from "./../../../assets/sce6.jpg";
import Scene7 from "./../../../assets/sce7.jpg";
import Scene8 from "./../../../assets/sce8.jpg";


class Scenic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        <section className="secBanner"> 
            <img src={Scebanner} alt="ban" width="100%"/>
            <div className="bannerTxt">
                <div className="bnrMainTxt" >
                      <p>SCENIC STAYS FOR SERENE</p>
                </div>
                <p className="bnrSmlTxt">The word scenery made be think of a play. And as we were driving around, it made sense that way. 
                Because no matter how much the scenery changed, we were still on the same stage.</p>
                <a type="button" className="git">Get in touch with us</a>
              </div>
        </section> 

        <section className="LatestBlog">
            <div className="blogStart">
                <div className="blogCap">
                    <p>Heavenly Places</p>
                </div>
                <br/>
                <div className="blogList">
                    <img className="blogImg" src={Scene2}/>
                    <b className="sml">From $1300 </b>
                    <span>/ person</span>
                    <h2>
                        Mountains
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Scene3}/>
                    <b className="sml">From $2199 </b>
                    <span>/ person</span>
                    <h2>
                        Lakes next to you
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Scene4}/>
                    <b className="sml">From $1400 </b>
                    <span>/ person</span>
                    <h2>
                        Resorts
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Scene5}/>
                    <b className="sml">From $1250 </b>
                    <span>/ person</span>
                    <h2>
                        Luxury Visits
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                        
                </div>

                <div className="blogList">
                    <img className="blogImg" src={Scene1}/>
                    <b className="sml">From $374 </b>
                    <span>/ person</span>
                    <h2>
                        Soley Travelers
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, iusto dolores harum asperiores
                        labore ipsam voluptates alias sunt</p>
                    
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
                    Visit Before You Die
                </div>
                <div class="abiImages">
                    <div class="abiCont">
                        <img class="abiImg" src={Scene6}/>
                        <div class="bottom-left">Over Mountains</div>
                    </div>
                    <div class="abiCont">
                        <img class="abiImg" src={Scene7}/>
                        <div class="bottom-left">Resort next to tides</div>
                    </div>
                    <div class="abiCont">
                        <img class="abiImg" src={Scene8}/>
                        <div class="bottom-left">Deserts and Dunes</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    );
  }
}

export default Scenic;
