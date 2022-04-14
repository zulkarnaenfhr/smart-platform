import React, { Component } from "react";
import "./BigView-AboutUs-Section3.css";

class BigviewAboutusSection3 extends Component {
    render() {
        return (
            <div id="BigViewAboutUs-Section3">
                <div className="BigViewAboutUs-Section3-Content-Container">
                    <h1 className="BigViewAboutUs-Section3-Title">Our Benefit</h1>
                    <img className="BigViewAboutUs-Section3-Background" src={require("../../../../src/Big-View/BigView-AboutUs/Section3-Background.png")} alt="" />
                    <div className="BigViewAboutUs-Section3-List-Container BigViewAboutUs-Section3-List-Container1 row">
                        <div className="col-1">
                            <img src={require("../../../../src/Big-View/BigView-AboutUs/Checklist.png")} alt="" />
                        </div>
                        <div className="col-11">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="BigViewAboutUs-Section3-List-Container BigViewAboutUs-Section3-List-Container2 row">
                        <div className="col-1">
                            <img src={require("../../../../src/Big-View/BigView-AboutUs/Checklist.png")} alt="" />
                        </div>
                        <div className="col-11">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="BigViewAboutUs-Section3-List-Container BigViewAboutUs-Section3-List-Container2 row">
                        <div className="col-1">
                            <img src={require("../../../../src/Big-View/BigView-AboutUs/Checklist.png")} alt="" />
                        </div>
                        <div className="col-11">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="BigViewAboutUs-Section3-List-Container BigViewAboutUs-Section3-List-Container2 row">
                        <div className="col-1">
                            <img src={require("../../../../src/Big-View/BigView-AboutUs/Checklist.png")} alt="" />
                        </div>
                        <div className="col-11">
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigviewAboutusSection3;
