import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div id="navbarSpl" data-aos="fade-up" data-aos-offset="200" data-aos-delay="0">
                <img className="navbarLogo" src={this.props.linkLogo} alt="" />
                <div className="navbarMenu-container">
                    <div className="navbarMenu dropdown">
                        <button
                            style={{
                                position: "relative",
                                bottom: "8.8px",
                                left: "15px",
                            }}
                            className="btn navbarMenu dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Product
                        </button>
                        <div className="dropdown-menu dropdown-menu-container" aria-labelledby="dropdownMenuButton1">
                            <table style={{ marginLeft: "16px", marginTop: "8.5px" }}>
                                <tbody>
                                    <tr style={{ height: "10px" }}>
                                        <td style={{ width: "140px" }}>
                                            <Link
                                                className="Dropdown-Menu"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Picasso</p>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                className="Dropdown-Menu"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big View</p>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            position: "relative",
                                            bottom: "6.5px",
                                        }}
                                    >
                                        <td>
                                            <Link
                                                className="Dropdown-Menu"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Smart Eye</p>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                className="Dropdown-Menu"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big Box</p>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr
                                        style={{
                                            position: "relative",
                                            bottom: "12.5px",
                                        }}
                                    >
                                        <td>
                                            <Link
                                                className="Dropdown-Menu"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Legal Analitycs</p>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                className="Dropdown-Menu"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big Score</p>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Link
                        style={{
                            marginLeft: "-25px",
                        }}
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
                    <div className="navbarMenu dropdown">
                        <button
                            style={{
                                position: "relative",
                                bottom: "8.8px",
                            }}
                            className="btn navbarMenu dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Resources
                        </button>
                        <div
                            className="dropdown-menu dropdown-menu-container"
                            aria-labelledby="dropdownMenuButton1"
                            style={{
                                height: "103px",
                                width: "152px",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "16px",
                                }}
                            >
                                <Link
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Documentation</p>
                                </Link>
                                <Link
                                    style={{
                                        position: "relative",
                                        bottom: "3px",
                                    }}
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>FAQ</p>
                                </Link>
                                <Link
                                    style={{
                                        position: "relative",
                                        bottom: "6px",
                                    }}
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Support</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbarMenu dropdown">
                        <button
                            style={{
                                marginLeft: "-45px",
                                marginBottom: "16.8px",
                            }}
                            className="btn navbarMenu dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Company
                        </button>
                        <div
                            className="dropdown-menu dropdown-menu-container"
                            aria-labelledby="dropdownMenuButton1"
                            style={{
                                height: "103px",
                                width: "108px",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "16px",
                                }}
                            >
                                <Link
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>About SPL</p>
                                </Link>
                                <Link
                                    style={{
                                        position: "relative",
                                        bottom: "3px",
                                    }}
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Blog</p>
                                </Link>
                                <Link
                                    style={{
                                        position: "relative",
                                        bottom: "6px",
                                    }}
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Press</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbarButton-container">
                    <button className="navbarButton buttonDemo">DEMO APPS</button>
                    <button className="navbarButton navbarContactUs" style={{ color: this.props.colorContactUs, backgroundColor: this.props.backgroundContactUs, borderColor: "transparent" }}>
                        CONTACT US
                    </button>
                </div>
            </div>
        );
    }
}

export default Navbar;
