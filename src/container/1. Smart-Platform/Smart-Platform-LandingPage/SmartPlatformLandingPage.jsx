import React, { Component } from "react";
import Navbarspl from "../../../components/Navbar/Smart platform/NavbarSPL";
import SmartPlatformLandingpageSection1 from "./Smart-Platform-LandingPage-Section1/Smart-Platform-LandingPage-Section1";
import SmartPlatformLandingpageSection2 from "./Smart-Platform-LandingPage-Section2/Smart-Platform-LandingPage-Section2";
import SmartPlatformLandingpageSection3 from "./Smart-Platform-LandingPage-Section3/Smart-Platform-LandingPage-Section3";
import SmartPlatformLandingpageSection4 from "./Smart-Platform-LandingPage-Section4/Smart-Platform-LandingPage-Section4";
import SmartPlatformLandingpageSection5 from "./Smart-Platform-LandingPage-Section5/Smart-Platform-LandingPage-Section5";
import SmartPlatformLandingpageSection6 from "./Smart-Platform-LandingPage-Section6/Smart-Platform-LandingPage-Section6";
import SmartPlatformLandingpageSection7 from "./Smart-Platform-LandingPage-Section7/Smart-Platform-LandingPage-Section7";
import SmartPlatformLandingpageSection8 from "./Smart-Platform-LandingPage-Section8/Smart-Platform-LandingPage-Section8";
import "./SmartPlatformLandingPage.css";
// import "../../../src/Smart-Platform/Landing Page/"

class Smartplatformlandingpage extends Component {
    render() {
        return (
            <div>
                <div className="SPL-LandingPage-navbar-container">
                    <Navbarspl linkLogo={require("../../../src/Smart-Platform/Landing Page/Logo-Navbar.png")} colorFreeTrial={`white`} backgroundFreeTrial={`#D23D3D`} colorContactUs={`white`} backgroundContactUs={`#D23D3D`} />{" "}
                </div>
                <div className="SPL-LandingPage-content-container">
                    <SmartPlatformLandingpageSection1 />
                    <div className="SPL-LandingPage-content-container-section-2-3">
                        <SmartPlatformLandingpageSection2 />
                        <SmartPlatformLandingpageSection3 />
                    </div>
                    <SmartPlatformLandingpageSection4 />
                    <SmartPlatformLandingpageSection5 />
                    <SmartPlatformLandingpageSection6 />
                    <SmartPlatformLandingpageSection7 />
                    <SmartPlatformLandingpageSection8 />
                    <h1>masuk batas bawah</h1>
                </div>
                <img className="SPL-LandingPage-Section7-Background2" src={require("../../../src/Smart-Platform/Landing Page/Section-7-Background2.png")} alt="" />
            </div>
        );
    }
}

export default Smartplatformlandingpage;
