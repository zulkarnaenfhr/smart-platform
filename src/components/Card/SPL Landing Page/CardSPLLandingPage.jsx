import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CardSPLLandingPage.css";
import styled from "styled-components";

const CardSPLLandingPageLogo = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
`;

const CardSPLLandingPageDesc = styled.p`
    margin-top: ${(props) => props.marginTopDesc};
`;

class Cardspllandingpage extends Component {
    render() {
        return (
            <div id="CardSPLLandingPage">
                <Link
                    to={{
                        pathname: `${this.props.linkProduct}`,
                    }}
                >
                    <button className="CardSPLLandingPage-Button">View More</button>
                </Link>
                <div>
                    <CardSPLLandingPageLogo loading="lazy" src={this.props.logoImg} width={this.props.width} height={this.props.height} marginTop={this.props.marginTop} marginLeft={this.props.marginLeft} />
                    <CardSPLLandingPageDesc marginTopDesc={this.props.marginTopDesc} className="CardSPLLandingPage-Desc">
                        <b>{this.props.productName}</b> {this.props.productDesc}
                    </CardSPLLandingPageDesc>
                </div>
            </div>
        );
    }
}

export default Cardspllandingpage;
