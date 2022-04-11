import React, { Component } from "react";
import Navbarbigview from "../../../components/Navbar/Big View/NavbarBigView";
import BigviewLandingpageSection1 from "./BigView-LandingPage-Section1/BigView-LandingPage-Section1";
import BigviewLandingpageSection2 from "./BigView-LandingPage-Section2/BigView-LandingPage-Section2";
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
                </div>
            </div>
        );
    }
}

export default Bigviewlandingpage;
