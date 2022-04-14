import React, { Component } from "react";
import Navbarbigviewnormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewAboutusSection1 from "./BigView-AboutUs-Section1/BigView-AboutUs-Section1";
import BigviewAboutusSection2 from "./BigView-AboutUs-Section2/BigView-AboutUs-Section2";
import BigviewAboutusSection3 from "./BigView-AboutUs-Section3/BigView-AboutUs-Section3";

class Bigviewaboutus extends Component {
    render() {
        return (
            <div id="BigViewAboutUs">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewAboutusSection1 />
                <BigviewAboutusSection2 />
                <BigviewAboutusSection3 />
            </div>
        );
    }
}

export default Bigviewaboutus;
