import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div id="navbarSpl" data-aos="fade-up" data-aos-offset="200" data-aos-delay="0">
                <img className="navbarLogo" src={this.props.linkLogo} alt="" />
                <div className="navbarMenu-container">
                    <div class="navbarMenu dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Product
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <table>
                                <tr>
                                    <td>
                                        <Link
                                            className="navbarMenu"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Picasso</p>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            className="navbarMenu"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Big View</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <li>
                                            <Link
                                                className="navbarMenu"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Smart Eye</p>
                                            </Link>
                                        </li>
                                    </td>
                                </tr>
                            </table>
                        </ul>
                    </div>
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
