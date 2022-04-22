import React, { Component } from "react";
import Beforefooterbigscore from "../../../components/BeforeFooter/Big Score/BeforeFooterBigScore";
import Footerbigscore from "../../../components/Footer/Big-Score/FooterBigScore";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscoreAboutusSection1 from "./BigScore-AboutUs-Section1/BigScore-AboutUs-Section1";
import BigscoreAboutusSection2 from "./BigScore-AboutUs-Section2/BigScore-AboutUs-Section2";
import BigscoreAboutusSection3 from "./BigScore-AboutUs-Section3/BigScore-AboutUs-Section3";
import BigscoreAboutusSection4 from "./BigScore-AboutUs-Section4/BigScore-AboutUs-Section4";
import "./BigScoreAboutUs.css";

class Bigscoreaboutus extends Component {
    render() {
        return (
            <div id="BigScoreAboutUs">
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreAboutusSection1 />
                <BigscoreAboutusSection2 />
                <BigscoreAboutusSection3 />
                <BigscoreAboutusSection4 />
                <Beforefooterbigscore />
                <Footerbigscore />
            </div>
        );
    }
}

export default Bigscoreaboutus;
