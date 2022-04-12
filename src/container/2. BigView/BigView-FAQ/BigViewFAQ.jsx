import React, { Component } from "react";
import NavbarBigViewNormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewFaqSection1 from "./BigView-FAQ-Section1/BigView-FAQ-Section1";

class Bigviewfaq extends Component {
    render() {
        return (
            <div id="BigViewFAQ">
                <div className="bigView-navbar-container">
                    <NavbarBigViewNormal />
                </div>
                <BigviewFaqSection1 />
            </div>
        );
    }
}

export default Bigviewfaq;
