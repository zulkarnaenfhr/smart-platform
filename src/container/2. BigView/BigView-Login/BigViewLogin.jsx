import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BigViewLogin.css";

class Bigviewlogin extends Component {
    render() {
        return (
            <div id="BigViewLogin">
                <div className="BigViewLogin-content-container-left">
                    <div>
                        <h1 className="BigViewLogin-content-container-left-Hello">Hello Again !</h1>
                        <p className="BigViewLogin-content-container-left-Hello2">We miss you, welcome back!</p>
                        <form action="">
                            <input className="BigViewLogin-input BigViewLogin-input1 container" type="text" placeholder="Email Address" />
                            <br />
                            <input className="BigViewLogin-input BigViewLogin-input2 container" type="text" placeholder="Password" />
                            <Link
                                className="BigViewLogin-ForgotPass-container"
                                to={{
                                    pathname: "notset",
                                }}
                            >
                                <p className="BigViewLogin-ForgotPass">Forgot Password?</p>
                            </Link>
                            <button className="BigViewLogin-ButtonSubmit" type="submit">
                                Sign In
                            </button>
                        </form>

                        <div className="BigViewLogin-Or-Container">
                            <div class="BigViewLogin-Or">Or</div>
                        </div>
                        <button className="BigViewLogin-ButtonGoogle">Sign In With Google</button>
                        <p className="BigViewLogin-SignUp">
                            Don’t have an account?{" "}
                            <span>
                                <Link
                                    to={{
                                        pathname: `notset`,
                                    }}
                                >
                                    Sign Up
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="BigViewLogin-content-container-right">
                    <div className="BigViewLogin-content-right-Background1"></div>
                    <img src={require("../../../src/Big-View/BigView-Login/Right-V-Background.png")} className="BigViewLogin-content-right-Background-v" />
                    <div className="BigViewLogin-content-right-Background-gradient"></div>
                    <h1 className="BigViewLogin-content-right-Title">Grow big with Big View</h1>
                    <br />
                    <div className="BigViewLogin-content-right-vector-container">
                        <img src={require("../../../src/Big-View/BigView-Login/Right-Vector.png")} className="BigViewLogin-content-right-vector" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bigviewlogin;
