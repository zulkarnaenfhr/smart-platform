import React, { Component } from "react";
import "./Smart-Platform-LandingPage-Section6.css";

class SmartPlatformLandingpageSection6 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section6" data-aos="fade-up" data-aos-offset="100">
                <h1 className="SPL-LandingPage-Section6-title">Customer</h1>
                <div className="SPL-LandingPage-Section6-Content-Logo-Container">
                    <div className="SPL-LandingPage-Section6-Logo-Container">
                        <div className="SPL-LandingPage-Section6-logo-row1">
                            <img className="Telkom" src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Telkom-Indonesia.png")} alt="Section-6-Telkom-Indonesia" border="0"></img>
                            <img className="Kemenkes" src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Kemenkes.png")} alt="Section-6-Kemenkes" border="0"></img>
                            <img className="SekNatNegara" src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Seknat-Negara.png")} alt="Section-6-Sekretariat-Negara" border="0"></img>
                            <img className="Pertamina" src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Pertamina.png")} alt="Section-6-Pertamina" border="0"></img>
                        </div>
                        <div className="SPL-LandingPage-Section6-logo-row2">
                            <img className="Dishub" src={require("../../../../src/Smart-Platform/Landing Page/Section-6-Dishub.png")} alt="Section-6-Dishub" border="0"></img>
                            <img className="AHM" src={require("../../../../src/Smart-Platform/Landing Page/Section-6-AHM.png")} alt="Section-6-AHM" border="0"></img>
                        </div>
                    </div>
                </div>
                <h1 className="SPL-LandingPage-Section6-andMore">AND MORE..</h1>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection6;
