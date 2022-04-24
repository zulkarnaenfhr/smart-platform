import React, { Component } from "react";
import Beforefooterbigscore from "../../../components/BeforeFooter/Big Score/BeforeFooterBigScore";
import Footerbigscore from "../../../components/Footer/Big-Score/FooterBigScore";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscoreAboutcompanySection1 from "./BigScore-AboutCompany-Section1/BigScore-AboutCompany-Section1";
import "./BigScore-AboutCompany.css";

class BigscoreAboutcompany extends Component {
    render() {
        return (
            <div>
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreAboutcompanySection1 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default BigscoreAboutcompany;
