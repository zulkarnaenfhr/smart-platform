import React, { Component } from "react";
import Beforefooterbigview from "../../../components/BeforeFooter/Big View/BeforeFooterBigView";
import Footerbigview from "../../../components/Footer/Big-View/FooterBigView";
import Navbarbigviewnormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewDocumentationSection1 from "./BigView-Documentation-Section1/BigView-Documentation-Section1";
import "./BigViewDocumentation.css";

class Bigviewdocumentation extends Component {
    componentDidMount() {
        document.title = "Documentation Big View";
    }
    render() {
        return (
            <div id="BigViewDocumentation">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewDocumentationSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewdocumentation;
