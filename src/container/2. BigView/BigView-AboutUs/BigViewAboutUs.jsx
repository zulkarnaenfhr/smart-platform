import React, { Component } from "react";
import Navbarbigviewnormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewAboutusSection1 from "./BigView-AboutUs-Section1/BigView-AboutUs-Section1";

class Bigviewaboutus extends Component {
    render() {
        return (
            <div id="BigViewAboutUs">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewAboutusSection1 />
            </div>
        );
    }
}

export default Bigviewaboutus;
