import React, { Component } from "react";
import "./NavbarSPL.css";
import { Link } from "react-router-dom";

class Navbarspl extends Component {
    render() {
        return (
            <nav id="navbarSpl" class="navbar navbarSpl navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="SPLNavbarLogo-Container" href="#">
                        <img className="SPLNavbarLogo" src={require("../../../src/Smart-Platform/Landing Page/Logo-Navbar.png")} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav SplnavbarMenu-container">
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle SplNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>
                                <ul class="dropdown-menu SplNavbarDropdownProduct-Container" aria-labelledby="navbarDropdown">
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
                            <li class="nav-item SplNavbarMenuSolution">
                                <Link
                                    className="SplNavbarMenu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Solution</p>
                                </Link>
                            </li>
                            <li class="nav-item SplNavbarMenuPartnership">
                                <Link
                                    className="SplNavbarMenu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Partnership</p>
                                </Link>
                            </li>
                            <li class="nav-item dropdown SplNavbarMenuResources">
                                <a class="dropdown-toggle SplNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul class="dropdown-menu SplNavbarDropdownResources-Container" aria-labelledby="navbarDropdown ">
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
                            <li class="nav-item dropdown SplNavbarMenuCompany">
                                <a class="dropdown-toggle SplNavbarMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul class="dropdown-menu SplNavbarDropdownCompany-Container" aria-labelledby="navbarDropdown">
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
                            <button className="SPlNavbarButtonContactUs">CONTACT US</button>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbarspl;
