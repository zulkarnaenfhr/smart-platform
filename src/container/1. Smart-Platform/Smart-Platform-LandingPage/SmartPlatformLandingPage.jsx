import React, { Component } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./SmartPlatformLandingPage.css";

class Smartplatformlandingpage extends Component {
    render() {
        return (
            <div>
                <div className="navbar-container">
                    <Navbar linkLogo={`https://i.ibb.co/k4WFRLW/Logo-Navbar.png`} colorFreeTrial={`white`} backgroundFreeTrial={`#D23D3D`} colorContactUs={`white`} backgroundContactUs={`#D23D3D`} />
                </div>
                <div className="content-container">
                    <h1>lorem200</h1>
                </div>
                <div className="cekWidth">
                    <h1>masuk cek width</h1>
                </div>
            </div>
        );
    }
}

export default Smartplatformlandingpage;
