import React, { Component } from "react";
import "./ScrollCardSPLLandingPage.css";

class Scrollcardspllandingpage extends Component {
    render() {
        return (
            <div id="ScrollCardSPLLandingPage">
                <img loading="lazy" className="ScrollCardSPLLandingPage-logo" src={this.props.logo} alt="" border="0"></img>
                <div className="ScrollCardSPLLandingPage-Text-Container">
                    <h1>{this.props.judul}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default Scrollcardspllandingpage;
