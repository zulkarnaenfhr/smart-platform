import React, { Component } from "react";
import "./Smart-Platform-LandingPage-Section6.css";

class SmartPlatformLandingpageSection6 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section6" data-aos="fade-up" data-aos-offset="100">
                <h1 className="SPL-LandingPage-Section6-title">Customer</h1>
                <div
                    className="SPL-LandingPage-Section6-logo-row1"
                    style={{
                        marginTop: "41px",
                        marginLeft: "-61px",
                        display: "flex",
                        height: "200px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        style={{
                            width: "184px",
                            height: "142px",
                        }}
                        src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Telkom-Indonesia.png")}
                        alt="Section-6-Telkom-Indonesia"
                        border="0"
                    ></img>
                    <img
                        style={{
                            width: "187px",
                            height: "87px",
                            position: "relative",
                            left: "41px",
                        }}
                        src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Kemenkes.png")}
                        alt="Section-6-Kemenkes"
                        border="0"
                    ></img>
                    <img
                        style={{
                            width: "192px",
                            height: "192px",
                            position: "relative",
                            left: "58px",
                            bottom: "10px",
                        }}
                        src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Seknat-Negara.png")}
                        alt="Section-6-Sekretariat-Negara"
                        border="0"
                    ></img>
                    <img
                        style={{
                            width: "266px",
                            height: "62px",
                            position: "relative",
                            left: "74px",
                            bottom: "12px",
                        }}
                        src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Pertamina.png")}
                        alt="Section-6-Pertamina"
                        border="0"
                    ></img>
                </div>
                <div
                    className="SPL-LandingPage-Section6-logo-row1"
                    style={{
                        marginTop: "-10px",
                        marginLeft: "-31px",
                        display: "flex",
                        height: "130px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        style={{
                            width: "84px",
                            height: "97px",
                        }}
                        src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Dishub.png")}
                        alt="Section-6-Dishub"
                        border="0"
                    ></img>
                    <img
                        style={{
                            width: "203px",
                            height: "105px",
                            position: "relative",
                            left: "37px",
                            bottom: "17px",
                        }}
                        src={require("../../../../src/Smart-Platform/Landing Page/Section-6-AHM.png")}
                        alt="Section-6-AHM"
                        border="0"
                    ></img>
                </div>
                <h1 className="SPL-LandingPage-Section6-andMore">AND MORE..</h1>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection6;
