import React, { Component } from "react";
import Scrollcardspllandingpage from "../../../../components/Card/SPL Landing Page/ScrollCardSPLLandingPage";
import "./Smart-Platform-LandingPage-Section4.css";

class SmartPlatformLandingpageSection4 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section4">
                <div className="SPL-LandingPage-Section4-Scroll-Container">
                    <div className="SPL-LandingPage-Section4-Scroll-Header-Container">
                        <div className="SPL-LandingPage-Section4-Scroll-Header-Title">
                            What we’re offering Services{" "}
                            <span
                                style={{
                                    color: "#D23D3D",
                                }}
                            >
                                we’re providing to our clients
                            </span>
                        </div>
                    </div>
                    <div className="SPL-LandingPage-Section4-Scroll-Content-Container">
                        <Scrollcardspllandingpage
                            logo={`https://i.ibb.co/QpXwRBz/Section-4-Scroll-Card-Face-Detection.png`}
                            judul={`Face Detection`}
                            desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                        />
                        <Scrollcardspllandingpage
                            logo={`https://i.ibb.co/d0xvS6Z/Section-4-Scroll-Card-Document-Detection.png`}
                            judul={`Document Detection`}
                            desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                        />
                        <Scrollcardspllandingpage
                            logo={`https://i.ibb.co/gdT5S0r/Section-4-Scroll-Card-Data-Integration.png`}
                            judul={`Data Integration`}
                            desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                        />
                        <Scrollcardspllandingpage
                            logo={`https://i.ibb.co/n3LbKf4/Section-4-Scroll-Card-Payment-Behavior.png`}
                            judul={`Payment Behavior`}
                            desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                        />
                        <Scrollcardspllandingpage
                            logo={`https://i.ibb.co/XCSrvX6/Section-4-Scroll-Card-VR-Tour.png`}
                            judul={`VR Tour`}
                            desc={`Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.`}
                        />
                    </div>
                </div>
                <img className="SPL-LandingPage-Section4-Background" src="https://i.ibb.co/ncDFSH9/Section-3-Background.png" alt="Section-3-Background" border="0"></img>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection4;
