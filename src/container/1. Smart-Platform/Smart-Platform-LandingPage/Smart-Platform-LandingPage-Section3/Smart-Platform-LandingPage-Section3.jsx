import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Smart-Platform-LandingPage-Section3.css";

class SmartPlatformLandingpageSection3 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section3">
                <h1 className="SPL-LandingPage-Section3-Title">LET'S TRY OUR DEMO APPS</h1>
                <p className="SPL-LandingPage-Section3-Desc">
                    Discover how our products are implemented in real world situations and <br /> used in various use case through our interactive demo app.
                </p>
                <div style={{ width: "100vw", display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <Link
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <button className="SPL-LandingPage-Section3-Button">CONTACT US</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection3;
