import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarBigView.css";

class Navbarbigview extends Component {
    render() {
        return (
            <nav id="navbarBigView" class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="bigViewNavbarLogo-container" href="#">
                        <img className="bigViewNavbarLogo" src={require("../../../src/Big-View/BigViewLogo.png")} alt="" />{" "}
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav bigViewNavbarMenu-container">
                            <li class="nav-item bigViewNavbarMenuAboutUs">
                                <Link
                                    className="bigViewNavbarMenu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li class="nav-item bigViewNavbarMenuPartnership">
                                <Link
                                    className="bigViewNavbarMenu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Partnership</p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown bigViewMenuDropdown bigViewMenuResources">
                                <a className="dropdown-toggle bigViewNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu bigViewNavbarDropdownResources-container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <div className="bigViewDropdown-menu-Resources-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Resources"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Documentation</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Resources-row2 bigViewDropdown-menu-Resources-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Resources"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>FAQ</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Resources-row2 bigViewDropdown-menu-Resources-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Resources"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Support</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown bigViewMenuDropdown bigViewMenuCompany">
                                <a className="dropdown-toggle bigViewNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu bigViewNavbarDropdownCompany-container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <div className="bigViewDropdown-menu-Company-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Company"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>About Company</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Company-row2 bigViewDropdown-menu-Company-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Company"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Blog</p>
                                            </Link>
                                        </div>
                                        <div className="bigViewDropdown-Menu-Company-row2 bigViewDropdown-menu-Company-Container">
                                            <Link
                                                className="bigViewDropdown-menu-Company"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Press</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <div className="bigViewButton-Container">
                                <Link
                                    className="bigViewButtonContactUs-container"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <button className="bigViewButtonNavbar bigViewButtonContactUs">CONTACT US</button>
                                </Link>
                                <Link
                                    className="bigViewButtonFreeTrial-container"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <button className="bigViewButtonNavbar bigViewButtonFreeTrial">FREE TRIAL</button>
                                </Link>
                                <Link
                                    className="bigViewButtonDemoApps-container"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <button className="bigViewButtonNavbar bigViewButtonDemoApps">DEMO APPS</button>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbarbigview;
