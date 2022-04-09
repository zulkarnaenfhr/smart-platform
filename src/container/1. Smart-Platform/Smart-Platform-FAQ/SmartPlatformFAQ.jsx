import React, { Component } from "react";
import Footerspl from "../../../components/Footer/Smart-Platform/FooterSPL";
import Navbarspl from "../../../components/Navbar/Smart platform/NavbarSPL";
import SmartPlatformLandingpageSection8 from "../Smart-Platform-LandingPage/Smart-Platform-LandingPage-Section8/Smart-Platform-LandingPage-Section8";
import SmartPlatformFaqSection1 from "./Smart-Platform-FAQ-Section1/Smart-Platform-FAQ-Section1";
import "./SmartPlatformFAQ.css";

class Smartplatformfaq extends Component {
    render() {
        return (
            <div>
                <div className="SPL-LandingPage-navbar-container">
                    <Navbarspl />
                </div>{" "}
                <div className="SPL-FAQ-Navbar-Container">
                    <SmartPlatformFaqSection1 />
                    <SmartPlatformLandingpageSection8 />
                    <Footerspl />
                </div>
            </div>
        );
    }
}

export default Smartplatformfaq;
