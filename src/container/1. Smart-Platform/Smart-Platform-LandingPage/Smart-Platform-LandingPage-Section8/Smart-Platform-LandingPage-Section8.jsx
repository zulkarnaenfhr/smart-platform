import React, { Component } from "react";
import "./Smart-Platform-LandingPage-Section8.css";

class SmartPlatformLandingpageSection8 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section8">
                <img className="SPL-LandingPage-Section8-SPL-Logo" data-aos="fade-up" data-aos-offset="100" src={require("../../../../src/Smart-Platform/LogoSmartPlatform.png")} alt="Logo-Navbar" border="0"></img>
                <div
                    className="row"
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        className="col-4"
                        style={{
                            display: "flex",
                        }}
                    >
                        <div>
                            <p className="SPL-LandingPage-Section8-SPL-ColLeft-Row1" data-aos="fade-up" data-aos-offset="100">
                                Telkom Direktorat Digital Bussiness Bandung
                            </p>
                            <p className="SPL-LandingPage-Section8-SPL-ColLeft-Row2" data-aos="fade-up" data-aos-offset="100">
                                Jl. Gegerkalong Hilir no. 47, Sukasari, Kota <br /> Bandung, Jawa Barat 40152
                            </p>
                            <p className="SPL-LandingPage-Section8-SPL-ColLeft-Row3" data-aos="fade-up" data-aos-offset="100">
                                (022) 4571261
                            </p>
                            <p className="SPL-LandingPage-Section8-SPL-ColLeft-Row4" data-aos="fade-up" data-aos-offset="100">
                                admin@SPL.id
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-4"
                        style={{
                            display: "flex",
                        }}
                    >
                        <div>
                            <p className="SPL-LandingPage-Section8-SPL-ColMid-Row1" data-aos="fade-up" data-aos-offset="100">
                                Ikuti Social Media Kami <br />
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-facebook-square"></i>
                            </p>
                            <p className="SPL-LandingPage-Section8-SPL-ColMid-Row2" data-aos="fade-up" data-aos-offset="100">
                                id.smartplatform{" "}
                            </p>
                            <p className="SPL-LandingPage-Section8-SPL-ColMid-Row3" data-aos="fade-up" data-aos-offset="100">
                                Contact Integrated Dashboard Smart Governments
                            </p>
                        </div>
                    </div>
                    <img data-aos="fade-up" data-aos-offset="100" className="SPL-LandingPage-Section8-SPL-RightMid" src={require("../../../../src/Smart-Platform/Landing Page/Section-8-LogoRight.png")} alt="" />
                </div>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection8;
