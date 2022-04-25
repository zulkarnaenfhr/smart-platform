import React, { Component } from "react";
import "./Smart-Platform-LandingPage-Section1.css";

class SmartPlatformLandingpageSection1 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section1">
                <div className="SPL-LandingPage-Section1-Text-container">
                    <h3 data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
                        We Create And Build
                    </h3>
                    <h1 data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
                        Digital Products With Delightful <br /> AI Solution
                    </h1>
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="600">
                        <h4 data-aos="fade-up">BOOST YOUR BUSINESS VALUE</h4>
                        <a href="#SPL-LandingPage-Section2">
                            <button className="SPL-LandingPage-Section1-button-SeeDetails">
                                See Details <img src="https://i.ibb.co/Bq9580y/panah-bawah.png" alt="panah-bawah" border="0"></img>
                            </button>
                        </a>
                    </div>
                </div>
                <img
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    className="SPL-LandingPage-Section1-Background"
                    src={require("../../../../src/Smart-Platform/Landing Page/Section-1-Background.png")}
                    alt="Section-1-Background"
                    border="0"
                ></img>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection1;
