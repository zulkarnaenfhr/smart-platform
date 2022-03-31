import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div id="navbarSpl">
                <img className="navbarLogo" src={this.props.linkLogo} alt="" />
                <div className="navbarMenu-container">
                    <Link
                        className="navbarMenu"
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <p>Product</p>
                    </Link>
                    <Link
                        className="navbarMenu"
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <p>Solution</p>
                    </Link>
                    <Link
                        className="navbarMenu"
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <p>Partnership</p>
                    </Link>
                    <Link
                        className="navbarMenu"
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <p>Resources</p>
                    </Link>
                    <Link
                        className="navbarMenu"
                        to={{
                            pathname: `notset`,
                        }}
                    >
                        <p>Company</p>
                    </Link>
                </div>
                <div className="navbarButton-container">
                    <button className="navbarButton buttonDemo">DEMO APPS</button>
                    <button className="navbarButton" style={{ color: this.props.colorFreeTrial, backgroundColor: this.props.backgroundFreeTrial, borderColor: "transparent" }}>
                        FREE TRIAL
                    </button>
                    <button className="navbarButton" style={{ color: this.props.colorContactUs, backgroundColor: this.props.backgroundContactUs, borderColor: "transparent" }}>
                        CONTACT US
                    </button>
                </div>
            </div>
        );
    }
}

export default Navbar;
