import React, { Component } from "react";
import "./SmartPlatformSolution.css";
import Navbarspl from "../../../components/Navbar/Smart platform/NavbarSPL";
import SmartPlatformSolutionSection1 from "./Smart-Platform-Solution-Section1/Smart-Platform-Solution-Section1";
import SmartPlatformLandingpageSection3 from "../Smart-Platform-LandingPage/Smart-Platform-LandingPage-Section3/Smart-Platform-LandingPage-Section3";
import SmartPlatformLandingpageSection8 from "../Smart-Platform-LandingPage/Smart-Platform-LandingPage-Section8/Smart-Platform-LandingPage-Section8";
import Footerspl from "../../../components/Footer/Smart-Platform/FooterSPL";
import SmartPlatformSolutionSection2 from "./Smart-Platform-Solution-Section2/Smart-Platform-Solution-Section2";

class Smartplatformsolution extends Component {
    componentDidMount() {
        document.title = "Smart Platform Solution";
    }
    render() {
        return (
            <div id="SmartPlatformSolution">
                <div className="SPL-LandingPage-navbar-container">
                    <Navbarspl />
                </div>{" "}
                <div className="SPL-LandingPage-Content-Container">
                    <SmartPlatformSolutionSection1 />
                    <SmartPlatformSolutionSection2 />
                    <SmartPlatformLandingpageSection3 />
                    <SmartPlatformLandingpageSection8 />
                    <Footerspl />
                </div>
            </div>
        );
    }
}

export default Smartplatformsolution;
