import React, { Component } from "react";
import Beforefooterbigscore from "../../../components/BeforeFooter/Big Score/BeforeFooterBigScore";
import Footerbigscore from "../../../components/Footer/Big-Score/FooterBigScore";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscoreBlogSection1 from "./BigScore-Blog-Section1/BigScore-Blog-Section1";
import "./BigScore-Blog.css";

class BigscoreBlog extends Component {
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreBlogSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscoreBlog;
