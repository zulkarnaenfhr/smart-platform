import React, { Component } from "react";
import Beforefooterbigview from "../../../components/BeforeFooter/Big View/BeforeFooterBigView";
import Footerbigview from "../../../components/Footer/Big-View/FooterBigView";
import Navbarbigviewnormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewSupportSection1 from "./BigView-Support-Section1/BigView-Support-Section1";
import "./BigViewSupport.css";

class Bigviewsupport extends Component {
    componentDidMount() {
        document.title = "Support Big View";
    }
    render() {
        return (
            <div>
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewSupportSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewsupport;
