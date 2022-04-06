import React, { Component } from "react";
import "./Smart-Platform-LandingPage-Section5.css";

class SmartPlatformLandingpageSection5 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section5">
                <div className="SPL-LandingPage-Section5-Content-Container" data-aos="fade-up" data-aos-offset="0">
                    <h1 data-aos="fade-up" data-aos-offset="100">
                        product achievement
                    </h1>
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <img loading="lazy" className="SPL-LandingPage-Section5-Content-CostSaving-Logo" src={require("../../../../src/Smart-Platform/Landing Page/Section-5-Left.png")} alt="" border="0"></img>
                        <img loading="lazy" className="SPL-LandingPage-Section5-Content-CostSaving2-Logo" src={require("../../../../src/Smart-Platform/Landing Page/Section-5-Middle.png")} alt="" border="0"></img>
                        <img loading="lazy" className="SPL-LandingPage-Section5-Content-CostSaving3-Logo" src={require("../../../../src/Smart-Platform/Landing Page/Section-5-Right.png")} alt="" border="0"></img>
                    </div>
                    <div
                        className="SPL-LandingPage-Section5-Content-CostSaving-Title-Container"
                        style={{
                            display: "flex",
                        }}
                    >
                        <div>
                            <p className="SPL-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                Cost-saving practices
                            </p>
                            <h3 className="SPL-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                            </h3>
                        </div>
                        <div
                            style={{
                                marginLeft: "45px",
                            }}
                        >
                            <p className="SPL-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                Cost-saving practices
                            </p>
                            <h3 className="SPL-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                            </h3>
                        </div>
                        <div
                            style={{
                                marginLeft: "45px",
                            }}
                        >
                            <p className="SPL-LandingPage-Section5-Content-CostSaving1-Title" data-aos="fade-up" data-aos-offset="100">
                                Cost-saving practices
                            </p>
                            <h3 className="SPL-LandingPage-Section5-Content-CostSaving1-Desc" data-aos="fade-up" data-aos-offset="100">
                                Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection5;
