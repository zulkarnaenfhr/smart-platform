import React, { Component } from "react";
import Scrollcardspllandingpage from "../../../../components/Card/SPL Landing Page/ScrollCardSPLLandingPage";
import "./Smart-Platform-LandingPage-Section4.css";

class SmartPlatformLandingpageSection4 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section4">
                <div className="SPL-LandingPage-Section4-Scroll-Container-Responsive">
                    <div className="SPL-LandingPage-Section4-Scroll-Container" data-aos="fade-up" data-aos-offset="100">
                        <div className="SPL-LandingPage-Section4-Scroll-Header-Container">
                            <div className="SPL-LandingPage-Section4-Scroll-Header-Title">
                                What we’re offering Services <span>we’re providing to our clients</span>
                            </div>
                        </div>
                        <div className="SPL-LandingPage-Section4-Scroll-Content-Container">
                            <Scrollcardspllandingpage
                                logo={require("../../../../src/Smart-Platform/Landing Page/Section-4-Face-Detection.png")}
                                judul={`Face Detection`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardspllandingpage
                                logo={require("../../../../src/Smart-Platform/Landing Page/Section-4-Document-Detection.png")}
                                judul={`Document Detection`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardspllandingpage
                                logo={require("../../../../src/Smart-Platform/Landing Page/Section-4-Data-Integration.png")}
                                judul={`Data Integration`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardspllandingpage
                                logo={require("../../../../src/Smart-Platform/Landing Page/Section-4-Payment-Behavior.png")}
                                judul={`Payment Behavior`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                            <Scrollcardspllandingpage
                                logo={require("../../../../src/Smart-Platform/Landing Page/Section-4-Vr-Tour.png")}
                                judul={`VR Tour`}
                                desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                            />
                        </div>
                        <div className="SPL-LandingPage-Section4-Scroll-Vector-Container">
                            <img className="SPL-LandingPage-Section4-Scroll-Vector" src="https://i.ibb.co/cYbZrb5/panah-bawah-merah.png" alt="panah-bawah-merah" border="0"></img>
                        </div>
                    </div>
                </div>
                <img className="SPL-LandingPage-Section4-Background" src={require("../../../../src/Smart-Platform/Landing Page/Section-4-Background.png")} alt="Section-3-Background" border="0"></img>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection4;
