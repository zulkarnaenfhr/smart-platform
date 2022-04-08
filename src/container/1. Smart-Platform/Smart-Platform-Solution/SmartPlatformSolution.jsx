import React, { Component } from "react";
import "./SmartPlatformSolution.css";
import Navbarspl from "../../../components/Navbar/Smart platform/NavbarSPL";
import SmartPlatformSolutionSection1 from "./Smart-Platform-Solution-Section1/Smart-Platform-Solution-Section1";

class Smartplatformsolution extends Component {
    componentDidMount() {
        document.title = "Smart Platform Solution";
    }
    render() {
        return (
            <div id="SmartPlatformSolution">
                <div className="SPL-LandingPage-navbar-container">
                    <Navbarspl />
                </div>{" "}
                <div className="SPL-LandingPage-Content-Container">
                    <SmartPlatformSolutionSection1 />
                    <h1>batas bawah</h1>
                </div>
            </div>
        );
    }
}

export default Smartplatformsolution;
