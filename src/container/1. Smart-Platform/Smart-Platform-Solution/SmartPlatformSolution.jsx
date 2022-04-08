import React, { Component } from "react";
import "./SmartPlatformSolution.css";
import Navbarspl from "../../../components/Navbar/Smart platform/NavbarSPL";

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
                    <h1>masuk</h1>
                </div>
            </div>
        );
    }
}

export default Smartplatformsolution;
