import React from "react";
import "./../All/All.scss";
import Allbanner from "./../../../assets/allMainBann.jpg";
import ScrollableTabsButtonAuto from "./../All/Interest";
import Filtericon from "./../../../assets/filter_icon.png";
import Aac1 from "./../../../assets/artsandculture1.jpg";
import Aac2 from "./../../../assets/artsandculture2.jpg";
import Aac3 from "./../../../assets/artsandculture3.jpg";
import DownArr from "./../../../assets/arrow-down.png";



class All extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <section className="secBanner"> 
                    <img src={Allbanner} alt="ban" width="100%"/>
                    <div className="bannerTxt">
                        <div className="bnrMainTxt" >
                            <p>TICK OFF THE BUCKET LIST</p>
                        </div>
                        <p className="bnrSmlTxt">Check out all our plans - Execute your plans with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a type="button" className="git">Get in touch with us</a>
                    </div>
                </section> 
                <div className="slider">
                    <div className="filters">
                       <button className="butFilt">Filter<img src={Filtericon} className="filterIcon" /></button>
                       <button className="butFilt">Date</button>
                       <button className="butFilt">Group Size</button>
                    </div>
                    <div className="interestsList">
                        <ScrollableTabsButtonAuto/>
                    </div>
                </div>
                <div class="abiWarpper">
                    <div class="advByInt">
                        <div class="abiCap">
                            ART AND CULTURE
                        </div>
                        <div class="abiImages">
                            <div class="abiCont">
                                <img class="abiImg" src={Aac1}/>
                                <div class="bottom-left">Face Painting</div>
                            </div>
                            <div class="abiCont">
                                <img class="abiImg" src={Aac2}/>
                                <div class="bottom-left">Dance</div>
                            </div>
                            <div class="abiCont">
                                <img class="abiImg" src={Aac3}/>
                                <div class="bottom-left">Music</div>
                            </div>
                        </div>
                        <div className="showAll">
                            <a>SHOW MORE</a>
                            <div><img src={DownArr} className="downArr"/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
    }
    
    export default All;