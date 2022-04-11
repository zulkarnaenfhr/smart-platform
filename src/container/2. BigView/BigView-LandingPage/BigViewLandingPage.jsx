import React, { Component } from "react";
import Navbarbigview from "../../../components/Navbar/Big View/NavbarBigView";
import BigviewLandingpageSection1 from "./BigView-LandingPage-Section1/BigView-LandingPage-Section1";
import BigviewLandingpageSection2 from "./BigView-LandingPage-Section2/BigView-LandingPage-Section2";
import BigviewLandingpageSection3 from "./BigView-LandingPage-Section3/BigView-LandingPage-Section3";
import BigviewLandingpageSection4 from "./BigView-LandingPage-Section4/BigView-LandingPage-Section4";
import BigviewLandingpageSection5 from "./BigView-LandingPage-Section5/BigView-LandingPage-Section5";
import BigviewLandingpageSection6 from "./BigView-LandingPage-Section6/BigView-LandingPage-Section6";
import "./BigViewLandingPage.css";

class Bigviewlandingpage extends Component {
    render() {
        return (
            <div id="bigViewLandingPage">
                <div className="bigView-navbar-container">
                    <Navbarbigview />
                </div>
                <div className="bigView-content-container">
                    <BigviewLandingpageSection1 />
                    <div className="BigView-LandingPage-Section2-Container">
                        <BigviewLandingpageSection2 />
                    </div>
                    <BigviewLandingpageSection3 />
                    <BigviewLandingpageSection4 />
                    <BigviewLandingpageSection5 />
                    <BigviewLandingpageSection6 />
                </div>
            </div>
        );
    }
}

export default Bigviewlandingpage;
