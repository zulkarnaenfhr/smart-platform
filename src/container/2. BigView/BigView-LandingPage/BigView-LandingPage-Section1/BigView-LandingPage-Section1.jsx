import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigView-LandingPage-Section1.css";

class BigviewLandingpageSection1 extends Component {
    render() {
        return (
            <div id="BigViewLandingPage-Section1">
                <div className="BigViewLandingPage-Background-Container">
                    <img className="BigViewLandingPage-Section1-Background1" src={require("../../../../src/Big-View/BigView-LandingPage/Background Section 1.png")} alt="" />
                    <img className="BigViewLandingPage-Section1-Background2" src={require("../../../../src/Big-View/BigView-LandingPage/Background2 Section 1.png")} alt="" />
                </div>
                <div className="BigViewLandingPage-Content-Container">
                    <h1 className="BigViewLandingPage-Section1-Title">
                        Data <br /> di Dalam <br /> Genggamanmu
                    </h1>
                    <h3 className="BigViewLandingPage-Section1-Desc">Lörem ipsum smartplåster plasm köttskatt i bilsurfa.</h3>
                    <Link
                        className="BigViewLandingPage-Section1-Button-Container"
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <button className="BigViewLandingPage-Section1-Button">Free Trial</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BigviewLandingpageSection1;
