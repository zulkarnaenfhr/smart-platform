import React, { Component } from "react";
import Beforefooterbigscore from "../../../components/BeforeFooter/Big Score/BeforeFooterBigScore";
import Footerbigscore from "../../../components/Footer/Big-Score/FooterBigScore";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscorePartnershipSection1 from "./BigScore-Partnership-Section1/BigScore-Partnership-Section1";

class BigscorePartnership extends Component {
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>
                <BigscorePartnershipSection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscorePartnership;
