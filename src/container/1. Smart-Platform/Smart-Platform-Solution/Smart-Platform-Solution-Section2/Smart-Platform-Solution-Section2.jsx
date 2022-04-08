import React, { Component } from "react";
import "./Smart-Platform-Solution-Section2.css";

class SmartPlatformSolutionSection2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusWatch: "SmartCityGovernance",
        };
    }
    handleButtonStatusWatch = (e) => {
        this.setState({
            statusWatch: e.target.name,
        });
    };
    render() {
        return (
            <div id="SPL-Solution-Section2">
                <div className="row SPL-Solution-Section2-Content-Container">
                    <div className="col-4">
                        <button
                            name="SmartCityGovernance"
                            onClick={this.handleButtonStatusWatch}
                            className={this.state.statusWatch === "SmartCityGovernance" ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active" : "SPL-Solution-Section2-Button"}
                        >
                            Smart City & Governance
                        </button>
                        <br />
                        <button
                            name="Facility"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Facility" ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active SPL-Solution-Section2-Secondrow" : "SPL-Solution-Section2-Button SPL-Solution-Section2-Secondrow"
                            }
                        >
                            Facility
                        </button>
                        <br />
                        <button
                            name="Transport"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Transport" ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active SPL-Solution-Section2-Secondrow" : "SPL-Solution-Section2-Button SPL-Solution-Section2-Secondrow"
                            }
                        >
                            Transport
                        </button>
                        <br />
                        <button
                            name="Financial Services"
                            onClick={this.handleButtonStatusWatch}
                            className={
                                this.state.statusWatch === "Financial Services"
                                    ? "SPL-Solution-Section2-Button SPL-Solution-Section2-Button-Active SPL-Solution-Section2-Secondrow"
                                    : "SPL-Solution-Section2-Button SPL-Solution-Section2-Secondrow"
                            }
                        >
                            Financial Services
                        </button>
                    </div>
                    <div className="col-8">
                        <h1>masuk</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmartPlatformSolutionSection2;
