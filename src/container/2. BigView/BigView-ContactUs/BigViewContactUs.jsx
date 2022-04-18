import React, { Component } from "react";
import Beforefooterbigview from "../../../components/BeforeFooter/Big View/BeforeFooterBigView";
import Footerbigview from "../../../components/Footer/Big-View/FooterBigView";
import Navbarbigviewnormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewContactusSection1 from "./BigView-ContactUs-Section1/BigView-ContactUs-Section1";

class Bigviewcontactus extends Component {
    render() {
        return (
            <div id="BigViewContactUs">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewContactusSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewcontactus;
