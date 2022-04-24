import React, { Component } from "react";
import Beforefooterbigscore from "../../../components/BeforeFooter/Big Score/BeforeFooterBigScore";
import Footerbigscore from "../../../components/Footer/Big-Score/FooterBigScore";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscorePressSection1 from "./BigScore-Press-Section1/BigScore-Press-Section1";
import "./BigScore-Press.css";

class BigscorePress extends Component {
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscorePressSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscorePress;
