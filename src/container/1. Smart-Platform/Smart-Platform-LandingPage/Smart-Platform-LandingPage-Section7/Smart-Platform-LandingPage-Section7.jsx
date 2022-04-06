import React, { Component } from "react";
import "./Smart-Platform-LandingPage-Section7.css";

class SmartPlatformLandingpageSection7 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section7">
                <img className="SPL-LandingPage-Section7-Background" src={require("../../../../src/Smart-Platform/Landing Page/Section-7-Background.png")} alt="" />
                <h1 data-aos="fade-up" data-aos-offset="100" className="SPL-LandingPage-Section7-Title">
                    Embark Your AI Journey with Smart platform Now!
                </h1>
                <div data-aos="fade-up" data-aos-offset="100">
                    <button className="SPL-LandingPage-Section7-Contact-Us">Contact Us</button>
                </div>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection7;
