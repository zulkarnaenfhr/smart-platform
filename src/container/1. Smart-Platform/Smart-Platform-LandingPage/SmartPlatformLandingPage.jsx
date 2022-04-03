import React, { Component } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import SmartPlatformLandingpageSection1 from "./Smart-Platform-LandingPage-Section1/Smart-Platform-LandingPage-Section1";
import SmartPlatformLandingpageSection2 from "./Smart-Platform-LandingPage-Section2/Smart-Platform-LandingPage-Section2";
import SmartPlatformLandingpageSection3 from "./Smart-Platform-LandingPage-Section3/Smart-Platform-LandingPage-Section3";
import "./SmartPlatformLandingPage.css";

class Smartplatformlandingpage extends Component {
    render() {
        return (
            <div>
                <div className="navbar-container">
                    <Navbar linkLogo={`https://i.ibb.co/k4WFRLW/Logo-Navbar.png`} colorFreeTrial={`white`} backgroundFreeTrial={`#D23D3D`} colorContactUs={`white`} backgroundContactUs={`#D23D3D`} />
                </div>
                <div className="content-container">
                    <SmartPlatformLandingpageSection1 />
                    <SmartPlatformLandingpageSection2 />
                    <SmartPlatformLandingpageSection3 />
                    <h1>masuk batas bawah</h1>
                </div>
            </div>
        );
    }
}

export default Smartplatformlandingpage;
