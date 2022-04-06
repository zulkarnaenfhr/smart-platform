import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CardSPLLandingPage.css";

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
                    <img
                        style={{
                            marginTop: `${this.props.marginTop}`,
                            marginLeft: `${this.props.marginLeft}`,
                            width: `${this.props.width}`,
                            height: `${this.props.height}`,
                        }}
                        src={this.props.logoImg}
                        alt=""
                        loading="lazy"
                    />
                    <p
                        style={{
                            marginTop: `${this.props.marginTopDesc}`,
                        }}
                        className="CardSPLLandingPage-Desc"
                    >
                        {" "}
                        <b>{this.props.productName}</b> {this.props.productDesc}
                    </p>
                </div>
            </div>
        );
    }
}

export default Cardspllandingpage;
