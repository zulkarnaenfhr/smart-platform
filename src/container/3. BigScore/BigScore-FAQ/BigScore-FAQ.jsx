import React, { Component } from "react";
import Beforefooterbigscore from "../../../components/BeforeFooter/Big Score/BeforeFooterBigScore";
import Footerbigscore from "../../../components/Footer/Big-Score/FooterBigScore";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscoreFaqSection1 from "./BigScore-FAQ-Section1/BigScore-FAQ-Section1";
import "./BigScore-FAQ.css";

class BigscoreFaq extends Component {
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreFaqSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscoreFaq;
