import React, { Component } from "react";
import Beforefooterbigview from "../../../components/BeforeFooter/Big View/BeforeFooterBigView";
import Footerbigview from "../../../components/Footer/Big-View/FooterBigView";
import Navbarbigviewnormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewAboutcompanySection1 from "./BigView-AboutCompany-Section1/BigView-AboutCompany-Section1";
import "./BigViewAboutCompany.css";

class Bigviewaboutcompany extends Component {
    render() {
        return (
            <div>
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewAboutcompanySection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewaboutcompany;
