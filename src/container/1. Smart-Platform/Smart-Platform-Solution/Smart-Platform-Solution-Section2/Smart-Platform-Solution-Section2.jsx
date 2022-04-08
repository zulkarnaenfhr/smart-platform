import React, { Component } from "react";
import "./Smart-Platform-Solution-Section2.css";

class SmartPlatformSolutionSection2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusWatch: "SmartCityGovernance",
        };
    }
    handleButtonStatusWatch = (e) => {
        this.setState({
            statusWatch: e.target.name,
        });
    };
    render() {
        return (
            <div id="SPL-Solution-Section2">
                <div className="row SPL-Solution-Section2-Content-Container">
                    <div className="col-4">
                        <button
                            name="SmartCityGovernance"
                            onClick={this.handleButtonStatusWatch}
                            className={this.state.statusWatch === "SmartCityGovernance" ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active" : "SPL-Solution-Section2-Button"}
                        >
                            Smart City & Governance
                        </button>
                        <br />
                        <button
                            name="Facility"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Facility" ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active SPL-Solution-Section2-Secondrow" : "SPL-Solution-Section2-Button SPL-Solution-Section2-Secondrow"
                            }
                        >
                            Facility
                        </button>
                        <br />
                        <button
                            name="Transport"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Transport" ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active SPL-Solution-Section2-Secondrow" : "SPL-Solution-Section2-Button SPL-Solution-Section2-Secondrow"
                            }
                        >
                            Transport
                        </button>
                        <br />
                        <button
                            name="Financial Services"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Financial Services"
                                    ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active SPL-Solution-Section2-Secondrow"
                                    : "SPL-Solution-Section2-Button SPL-Solution-Section2-Secondrow"
                            }
                        >
                            Financial Services
                        </button>
                    </div>
                    <div className="col-8">
                        {this.state.statusWatch === "SmartCityGovernance" ? (
                            <div className="row SPL-Solution-Section2-RightSection">
                                <div className="col-6">
                                    <div>
                                        <img className="SPL-Solution-Section2-RightSection-Logo-FaceDetection" src={require("../../../../src/Smart-Platform/Landing Page/Section-4-Face-Detection.png")} alt="" />
                                        <p className="SPL-Solution-Section2-RightSection-Title">Face Detection</p>
                                        <p className="SPL-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 SPL-Solution-Section2-RightSection-Col62">
                                    <div>
                                        <img className="SPL-Solution-Section2-RightSection-Logo-DocumentDetection" src={require("../../../../src/Smart-Platform/Landing Page/Section-4-Document-Detection.png")} alt="" />
                                        <p className="SPL-Solution-Section2-RightSection-Title">Document Detection</p>
                                        <p className="SPL-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : this.state.statusWatch === "Facility" ? (
                            <div className="row SPL-Solution-Section2-RightSection">
                                <div className="col-6">
                                    <div>
                                        <img className="SPL-Solution-Section2-RightSection-Logo-FaceDetection" src={require("../../../../src/Smart-Platform/Landing Page/Section-4-Face-Detection.png")} alt="" />
                                        <p className="SPL-Solution-Section2-RightSection-Title">Face Detection</p>
                                        <p className="SPL-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 SPL-Solution-Section2-RightSection-Col62">
                                    <div>
                                        <img className="SPL-Solution-Section2-RightSection-Logo-DataIntegration" src={require("../../../../src/Smart-Platform/Landing Page/Section-4-Data-Integration.png")} alt="" />
                                        <p className="SPL-Solution-Section2-RightSection-Title">Data Integration</p>
                                        <p className="SPL-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : this.state.statusWatch === "Transport" ? (
                            <div className="row SPL-Solution-Section2-RightSection">
                                <div className="col-12">
                                    <div>
                                        <img className="SPL-Solution-Section2-RightSection-Logo-ObjectDetection" src={require("../../../../src/Smart-Platform/Solution/Smart-Platform-Solution-Section2-ObjectDetection.png")} alt="" />
                                        <p className="SPL-Solution-Section2-RightSection-Title">Object Detection</p>
                                        <p className="SPL-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row SPL-Solution-Section2-RightSection">
                                <div className="col-12">
                                    <div>
                                        <img className="SPL-Solution-Section2-RightSection-Logo-PaymentBehavior" src={require("../../../../src/Smart-Platform/Landing Page/Section-4-Payment-Behavior.png")} alt="" />
                                        <p className="SPL-Solution-Section2-RightSection-Title">Payment Behavior</p>
                                        <p className="SPL-Solution-Section2-RightSection-Desc">
                                            Dengan memanfaatkan teknologi 4.0 dalam mengelola dan menganalisa data dengan tepat, bisa menjadi peluang untuk melahirkan sebuah informasi yang tepat guna dan tepat sasaran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default SmartPlatformSolutionSection2;
