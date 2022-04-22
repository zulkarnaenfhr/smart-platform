import React, { Component } from "react";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscoreAboutusSection1 from "./BigScore-AboutUs-Section1/BigScore-AboutUs-Section1";
import "./BigScoreAboutUs.css";

class Bigscoreaboutus extends Component {
    render() {
        return (
            <div id="BigScoreAboutUs">
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>{" "}
                <BigscoreAboutusSection1 />
            </div>
        );
    }
}

export default Bigscoreaboutus;
