import React, { Component } from "react";
import "./NavbarSPL.css";
import { Link } from "react-router-dom";

class Navbarspl extends Component {
    render() {
        return (
            <div id="navbarSpl" data-aos="fade-up" data-aos-offset="200" data-aos-delay="0">
                <img className="navbarLogo" src={require("../../../src/Smart-Platform/Landing Page/Logo-Navbar.png")} alt="" />
                <div className="navbarMenu-container">
                    <div className="navbarMenu dropdown">
                        <button className="btn navbarMenu navbarMenuProduct dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Product
                        </button>
                        <div className="dropdown-menu dropdown-menu-container" aria-labelledby="dropdownMenuButton1">
                            <table>
                                <tbody>
                                    <tr className="tr1">
                                        <td className="td1">
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
                                    <tr className="tr2">
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
                                    <tr className="tr3">
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
                        className="navbarMenu navbarMenuSolution"
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
                    <div className="navbarMenu dropdown navbarMenuResources">
                        <button className="btn navbarMenu  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Resources
                        </button>
                        <div className="dropdown-menu dropdown-menu-container" aria-labelledby="dropdownMenuButton1">
                            <div>
                                <Link
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Documentation</p>
                                </Link>
                                <Link
                                    className="Dropdown-Menu FAQ"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>FAQ</p>
                                </Link>
                                <Link
                                    className="Dropdown-Menu Support"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Support</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbarMenu dropdown navbarMenuCompany">
                        <button className="btn navbarMenu dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Company
                        </button>
                        <div className="dropdown-menu dropdown-menu-container" aria-labelledby="dropdownMenuButton1">
                            <div>
                                <Link
                                    className="Dropdown-Menu"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>About SPL</p>
                                </Link>
                                <Link
                                    className="Dropdown-Menu Blog"
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    <p>Blog</p>
                                </Link>
                                <Link
                                    className="Dropdown-Menu Press"
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
                    <button className="navbarButton navbarContactUs">CONTACT US</button>
                </div>
            </div>
        );
    }
}

export default Navbarspl;
