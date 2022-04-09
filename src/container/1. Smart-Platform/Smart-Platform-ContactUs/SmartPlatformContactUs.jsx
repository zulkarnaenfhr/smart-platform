import React, { Component } from "react";
import Footerspl from "../../../components/Footer/Smart-Platform/FooterSPL";
import Navbarspl from "../../../components/Navbar/Smart platform/NavbarSPL";
import SmartPlatformLandingpageSection8 from "../Smart-Platform-LandingPage/Smart-Platform-LandingPage-Section8/Smart-Platform-LandingPage-Section8";
import SmartPlatformContactusSection1 from "./Smart-Platform-ContactUs-Section1/Smart-Platform-ContactUs-Section1";
import "./SmartPlatformContactUs.css";

class Smartplatformcontactus extends Component {
    componentDidMount() {
        document.title = "Smart Platform Contact Us";
    }
    render() {
        return (
            <div>
                <div className="SPL-LandingPage-navbar-container">
                    <Navbarspl />
                </div>
                <div className="SPL-ContactUs-Content-Container">
                    <SmartPlatformContactusSection1 />
                    <SmartPlatformLandingpageSection8 />
                    <Footerspl />
                </div>
            </div>
        );
    }
}

export default Smartplatformcontactus;
