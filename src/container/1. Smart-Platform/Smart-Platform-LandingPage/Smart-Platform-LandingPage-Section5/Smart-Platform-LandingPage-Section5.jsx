import React, { Component } from "react";
import "./Smart-Platform-LandingPage-Section5.css";

class SmartPlatformLandingpageSection5 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section5">
                <div className="SPL-LandingPage-Section5-Content-Container">
                    <h1>product achievement</h1>
                    {/* <div className="row">
                        <div className="col-4">
                            <p>masuk</p>
                        </div>
                        <div className="col-4">
                            <p>masuk</p>
                        </div>
                        <div className="col-4">
                            <p>masuk</p>
                        </div>
                    </div> */}
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <img className="SPL-LandingPage-Section5-Content-CostSaving-Logo" src="https://i.ibb.co/w66NKnz/Section-5-Cost-Saving.png" alt="Section-5-Cost-Saving" border="0"></img>
                        <img className="SPL-LandingPage-Section5-Content-CostSaving2-Logo" src="https://i.ibb.co/Tk1NF1n/Section-5-Cost-Saving2.png" alt="Section-5-Cost-Saving2" border="0"></img>
                        <img className="SPL-LandingPage-Section5-Content-CostSaving3-Logo" src="https://i.ibb.co/Jv7Bm19/Section-5-Cost-Saving3.png" alt="Section-5-Cost-Saving3" border="0"></img>
                    </div>
                    <div
                        className="SPL-LandingPage-Section5-Content-CostSaving-Title-Container"
                        style={{
                            display: "flex",
                        }}
                    >
                        <div>
                            <p className="SPL-LandingPage-Section5-Content-CostSaving1-Title">Cost-saving practices</p>
                            <h3 className="SPL-LandingPage-Section5-Content-CostSaving1-Desc">Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.</h3>
                        </div>
                        <div
                            style={{
                                marginLeft: "45px",
                            }}
                        >
                            <p className="SPL-LandingPage-Section5-Content-CostSaving1-Title">Cost-saving practices</p>
                            <h3 className="SPL-LandingPage-Section5-Content-CostSaving1-Desc">Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.</h3>
                        </div>
                        <div
                            style={{
                                marginLeft: "45px",
                            }}
                        >
                            <p className="SPL-LandingPage-Section5-Content-CostSaving1-Title">Cost-saving practices</p>
                            <h3 className="SPL-LandingPage-Section5-Content-CostSaving1-Desc">Meningkatkan efisiensi biaya operasional untuk kebutuhan bisnis anda.</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection5;
