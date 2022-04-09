import React, { Component } from "react";
import "./Smart-Platform-FAQ-Section1.css";

class SmartPlatformFaqSection1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faq1: false,
            faq2: false,
            faq3: false,
            faq4: false,
        };
    }
    handleFAQClick = (e) => {
        if (e.target.innerText === "Apa Itu Smart Platform") {
            this.setState({
                faq1: !this.state.faq1,
            });
        } else if (e.target.innerText === "Apa Saja Fiturnya") {
            this.setState({
                faq2: !this.state.faq2,
            });
        } else if (e.target.innerText === "Mengapa Harus Menggunakan Produk Ini") {
            this.setState({
                faq3: !this.state.faq3,
            });
        } else if (e.target.innerText === "Apa Yang Menjadi Kelebihan Produk Telkom") {
            this.setState({
                faq4: !this.state.faq4,
            });
        }
    };
    render() {
        return (
            <div id="SPL-FAQ-Section1">
                <div className="row SPL-FAQ-Section1-Content-Container">
                    <div className="col-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
                        <h1 className="SPL-FAQ-Section1-Title">FAQ</h1>
                    </div>
                    <div className="col-9" data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
                        <div className="row">
                            <div className="SPL-FAQ-Section1-Collapse-Container">
                                <button onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" name="faq1">
                                    <div className="row">
                                        <div className="col-11">Apa Itu Smart Platform</div>
                                        <div className="col-1">
                                            <img className={this.state.faq1 === false ? "SPL-FAQ-Section1-VectorSilang" : "SPL-FAQ-Section1-VectorSilangRotate"} src={require("../../../../src/Smart-Platform/FAQ/Vector Silang.png")} alt="" />
                                        </div>
                                    </div>{" "}
                                </button>
                                <div className="collapse divCollapse" id="collapseExample1">
                                    <p className="divCollapse-Container">
                                        Integrated data smart goverment adalah layanan yang dapat mengintegrasikan data dari berbagai aplikas ke dalam sebuah horizontal integrated platform dan memvisualisasikan informasi yang dibutuhkan
                                        dalam sebuah executive dashboard
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row"
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            <div className="SPL-FAQ-Section1-Collapse-Container">
                                <button name="faq2" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                    <div className="row">
                                        <div className="col-11">Apa saja fiturnya</div>
                                        <div className="col-1">
                                            <img className={this.state.faq2 === false ? "SPL-FAQ-Section1-VectorSilang" : "SPL-FAQ-Section1-VectorSilangRotate"} src={require("../../../../src/Smart-Platform/FAQ/Vector Silang.png")} alt="" />
                                        </div>
                                    </div>{" "}
                                </button>
                                <div className="collapse divCollapse" id="collapseExample2">
                                    <p className="divCollapse-Container">Fitur-fitur yang tersedia dalam IDSG antara lain Dashboard KPI, integrasi data, monitoring kinerja dan Big data analytic</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row"
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            <div className="SPL-FAQ-Section1-Collapse-Container">
                                <button name="faq3" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                    <div className="row">
                                        <div className="col-11">Mengapa harus menggunakan produk ini</div>
                                        <div className="col-1">
                                            <img className={this.state.faq3 === false ? "SPL-FAQ-Section1-VectorSilang" : "SPL-FAQ-Section1-VectorSilangRotate"} src={require("../../../../src/Smart-Platform/FAQ/Vector Silang.png")} alt="" />
                                        </div>
                                    </div>{" "}
                                </button>
                                <div className="collapse divCollapse" id="collapseExample3">
                                    <p className="divCollapse-Container">-</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row"
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            <div className="SPL-FAQ-Section1-Collapse-Container">
                                <button name="faq4" onClick={this.handleFAQClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                                    <div className="row">
                                        <div className="col-11">apa yang menjadi kelebihan produk telkom </div>
                                        <div className="col-1">
                                            <img className={this.state.faq4 === false ? "SPL-FAQ-Section1-VectorSilang" : "SPL-FAQ-Section1-VectorSilangRotate"} src={require("../../../../src/Smart-Platform/FAQ/Vector Silang.png")} alt="" />
                                        </div>
                                    </div>{" "}
                                </button>
                                <div className="collapse divCollapse" id="collapseExample4">
                                    <p className="divCollapse-Container">-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmartPlatformFaqSection1;
