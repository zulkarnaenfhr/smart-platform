import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigView-LandingPage-Section7.css";

class BigviewLandingpageSection7 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section7">
                <img className="BigViewLandingPage-Section7-Background" src={require("../../../../src/Big-View/BigView-LandingPage/Section7-Background.png")} alt="" />
                <div className="BigViewLandingPage-Section7-Text-Container">
                    <h1 className="BigViewLandingPage-Section7-Title">The Reason why you should choose us</h1>
                    <div className="BigViewLandingPage-Section7-Desc-Container">
                        <p className="BigViewLandingPage-Section7-Desc">
                            <td>
                                <img className="BigViewLandingPage-Section7-Desc-Checklist" src={require("../../../../src/Big-View/Checklist Big View.png")} alt="" />
                            </td>
                            <td>Mewujudkan Satu Data Indonesia</td>
                        </p>
                        <p className="BigViewLandingPage-Section7-Desc BigViewLandingPage-Section7-Desc-Second-Row">
                            <td>
                                <img className="BigViewLandingPage-Section7-Desc-Checklist" src={require("../../../../src/Big-View/Checklist Big View.png")} alt="" />
                            </td>
                            <td>
                                <p>Meningkatkan kualitas tata kelola data pemerintah </p>
                            </td>
                        </p>
                        <p className="BigViewLandingPage-Section7-Desc BigViewLandingPage-Section7-Desc-Second-Row">
                            <td>
                                <img className="BigViewLandingPage-Section7-Desc-Checklist" src={require("../../../../src/Big-View/Checklist Big View.png")} alt="" />{" "}
                            </td>
                            <td>
                                <p>Memonitor performasi dan kinerjA setiap SKPD</p>
                            </td>
                        </p>
                        <p className="BigViewLandingPage-Section7-Desc BigViewLandingPage-Section7-Desc4 BigViewLandingPage-Section7-Desc-Second-Row">
                            <td>
                                <img className="BigViewLandingPage-Section7-Desc-Checklist" src={require("../../../../src/Big-View/Checklist Big View.png")} alt="" />
                            </td>
                            <td>
                                <p>
                                    Memberikan insight dalam melakukan prediksi dan <br /> <span> perkembangan ke depan </span>
                                </p>
                            </td>
                        </p>
                    </div>
                    <Link
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <button className="BigViewLandingPage-Section7-Button">Learn More</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection7;
