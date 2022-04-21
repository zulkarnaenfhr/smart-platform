import React, { Component } from "react";
import Beforefooterbigview from "../../../components/BeforeFooter/Big View/BeforeFooterBigView";
import Footerbigview from "../../../components/Footer/Big-View/FooterBigView";
import Navbarbigviewnormal from "../../../components/Navbar/Big View/NavbarBigViewNormal";
import BigviewBlogSection1 from "./BigView-Blog-Section1/BigView-Blog-Section1";
import "./BigViewBlog.css";

class Bigviewblog extends Component {
    render() {
        return (
            <div id="BigViewBlog">
                <div className="bigView-navbar-container">
                    <Navbarbigviewnormal />
                </div>{" "}
                <BigviewBlogSection1 />
                <Beforefooterbigview />
                <Footerbigview />
            </div>
        );
    }
}

export default Bigviewblog;
