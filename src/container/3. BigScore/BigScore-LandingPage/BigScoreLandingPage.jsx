import React, { Component } from "react";
import Beforefooterbigview from "../../../components/BeforeFooter/Big View/BeforeFooterBigView";
import Navbarbigscore from "../../../components/Navbar/Big Score/NavbarBigScore";
import BigscoreLandingpageSection1 from "./BigScore-LandingPage-Section1/BigScore-LandingPage-Section1";
import BigscoreLandingpageSection2 from "./BigScore-LandingPage-Section2/BigScore-LandingPage-Section2";
import BigscoreLandingpageSection3 from "./BigScore-LandingPage-Section3/BigScore-LandingPage-Section3";
import BigscoreLandingpageSection4 from "./BigScore-LandingPage-Section4/BigScore-LandingPage-Section4";
import "./BigScoreLandingPage.css";

class Bigscorelandingpage extends Component {
    render() {
        return (
            <div id="BigScoreLandingPage">
                <div className="BigScore-navbar-container">
                    <Navbarbigscore />
                </div>
                <BigscoreLandingpageSection1 />
                <BigscoreLandingpageSection2 />
                <BigscoreLandingpageSection3 />
                <BigscoreLandingpageSection4 />
                <Beforefooterbigview />
            </div>
        );
    }
}

export default Bigscorelandingpage;
