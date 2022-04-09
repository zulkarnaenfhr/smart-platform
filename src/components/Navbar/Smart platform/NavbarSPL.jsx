import React, { Component } from "react";
import "./NavbarSPL.css";
import { Link } from "react-router-dom";

class Navbarspl extends Component {
    render() {
        return (
            <nav data-aos="fade-up" data-aos-offset="200" id="navbarSpl" className="navbar navbarSpl navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="SPLNavbarLogo-Container" href="/smart-platform">
                        <img className="SPLNavbarLogo" src={require("../../../src/Smart-Platform/Landing Page/Logo-Navbar.png")} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav SplnavbarMenu-container">
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle SplNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>
                                <ul className="dropdown-menu SplNavbarDropdownProduct-Container" aria-labelledby="navbarDropdown">
                                    <div className="row">
                                        <div className="col-6">
                                            <Link
                                                className="SplDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Picasso</p>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                className="SplDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big View</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row SplNavbarDropdownProduct-row2">
                                        <div className="col-6">
                                            <Link
                                                className="SplDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Smart Eye</p>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                className="SplDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big Box</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row SplNavbarDropdownProduct-row3">
                                        <div className="col-6">
                                            <Link
                                                className="SplDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Legal Analytycs</p>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                className="SplDropdown-Menu-Product"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Big Score</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item SplNavbarMenuSolution">
                                <Link
                                    className="SplNavbarMenu"
                                    to={{
                                        pathname: `/smart-platform/solution`,
                                    }}
                                >
                                    <p>Solution</p>
                                </Link>
                            </li>
                            <li className="nav-item SplNavbarMenuPartnership">
                                <Link
                                    className="SplNavbarMenu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Partnership</p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown SplNavbarMenuResources">
                                <a className="dropdown-toggle SplNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu SplNavbarDropdownResources-Container" aria-labelledby="navbarDropdown ">
                                    <div>
                                        <Link
                                            className="SplDropdown-Menu-Recources"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>Documentation</p>
                                        </Link>
                                        <div className="SplDropdown-Menu-Recources-row2">
                                            <Link
                                                className="SplDropdown-Menu-Recources"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>FAQ</p>
                                            </Link>
                                        </div>
                                        <div className="SplDropdown-Menu-Recources-row3">
                                            <Link
                                                className="SplDropdown-Menu-Recources"
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
                            <li className="nav-item dropdown SplNavbarMenuCompany">
                                <a className="dropdown-toggle SplNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu SplNavbarDropdownCompany-Container" aria-labelledby="navbarDropdown">
                                    <div>
                                        <Link
                                            className="SplDropdown-Menu-Company"
                                            to={{
                                                pathname: `notset`,
                                            }}
                                        >
                                            <p>About SPL</p>
                                        </Link>
                                        <div className="SplDropdown-Menu-Company-row2">
                                            <Link
                                                className="SplDropdown-Menu-Company"
                                                to={{
                                                    pathname: `notset`,
                                                }}
                                            >
                                                <p>Blog</p>
                                            </Link>
                                        </div>
                                        <div className="SplDropdown-Menu-Company-row3">
                                            <Link
                                                className="SplDropdown-Menu-Company"
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
                            <button className="SplNavbarButtonDemoApps">DEMO APPS</button>
                            <Link
                                className="SPLNavbarButtonContactUs"
                                to={{
                                    pathname: `/smart-platform/contactus`,
                                }}
                            >
                                <button className="SPlNavbarButtonContactUs">CONTACT US</button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbarspl;
