import React, { Component } from "react";
import "./BigView-AboutUs-Section2.css";

class BigviewAboutusSection2 extends Component {
    render() {
        return (
            <div id="BigViewAboutUs-Section2">
                <div className="BigViewAboutUs-Section2-Content-Container">
                    <img className="BigViewAboutUs-Section2-Background" src={require("../../../../src/Big-View/BigView-AboutUs/Section2-Background.png")} alt="" />
                    <h1 className="BigViewAboutUs-Section2-Title">
                        Our Mission <span> Purpose Value</span>
                    </h1>
                    <p className="BigViewAboutUs-Section2-Desc">
                        As an agency focused on measurable, empathy-based marketing, our culture is reflective of that. Our mission, values, and purpose add aspiration and structure to how we hire, establish partnerships, and create
                        award-winning work.
                    </p>
                    <div className="BigViewAboutUs-Section2-List-Container row">
                        <div className="col-1">
                            <img src={require("../../../../src/Big-View/BigView-AboutUs/Checklist.png")} alt="" />
                        </div>
                        <div className="col-11">
                            <h1>Mission</h1>
                            <p>To ... Lörem ipsum smartplåster plasm köttskatt i bilsurfa.</p>
                        </div>
                    </div>
                    <div className="BigViewAboutUs-Section2-List-Container BigViewAboutUs-Section2-List-Container2 row">
                        <div className="col-1">
                            <img src={require("../../../../src/Big-View/BigView-AboutUs/Checklist.png")} alt="" />
                        </div>
                        <div className="col-11">
                            <h1>Purpose</h1>
                            <p>To ... Lörem ipsum smartplåster plasm köttskatt i bilsurfa.</p>
                        </div>
                    </div>
                    <div className="BigViewAboutUs-Section2-List-Container BigViewAboutUs-Section2-List-Container2 row">
                        <div className="col-1">
                            <img src={require("../../../../src/Big-View/BigView-AboutUs/Checklist.png")} alt="" />
                        </div>
                        <div className="col-11">
                            <h1>Value</h1>
                            <p>To ... Lörem ipsum smartplåster plasm köttskatt i bilsurfa.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BigviewAboutusSection2;
