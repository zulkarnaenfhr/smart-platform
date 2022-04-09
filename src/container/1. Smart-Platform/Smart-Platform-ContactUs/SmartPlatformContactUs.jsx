import React, { Component } from "react";
import Footerspl from "../../../components/Footer/Smart-Platform/FooterSPL";
import Navbarspl from "../../../components/Navbar/Smart platform/NavbarSPL";
import SmartPlatformLandingpageSection8 from "../Smart-Platform-LandingPage/Smart-Platform-LandingPage-Section8/Smart-Platform-LandingPage-Section8";
import "./SmartPlatformContactUs.css";

class Smartplatformcontactus extends Component {
    render() {
        return (
            <div>
                <div className="SPL-LandingPage-navbar-container">
                    <Navbarspl />
                </div>
                <div className="SPL-ContactUs-Content-Container">
                    <h1>masuk smart platform contact us</h1>
                    <SmartPlatformLandingpageSection8 />
                    <Footerspl />
                </div>
            </div>
        );
    }
}

export default Smartplatformcontactus;
