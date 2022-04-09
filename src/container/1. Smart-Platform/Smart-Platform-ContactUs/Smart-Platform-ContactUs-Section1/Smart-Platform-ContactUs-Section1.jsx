import React, { Component } from "react";
import "./Smart-Platform-ContactUs-Section1.css";

class SmartPlatformContactusSection1 extends Component {
    render() {
        return (
            <div id="SPL-ContactUs-Section1">
                <div className="row SPL-ContactUs-Section1-Content-Container">
                    <div className="col-5">
                        <h1 className="SPL-ContactUs-Section1-Title">Contact our team</h1>
                        <p className="SPL-ContactUs-Section1-Desc">We are happy to answer your question</p>
                    </div>
                    <div className="col-7">
                        <form action="" className="SPL-ContactUs-Section1-Form-Container">
                            <label htmlFor="">Name</label>
                            <br />
                            <input placeholder="Your name" type="text" name="" id="" />
                            <br />
                            <label htmlFor="">Email</label>
                            <br />
                            <input placeholder="youremail@example.com" type="text" name="" id="" />
                            <br />
                            <label htmlFor="">Phone number</label>
                            <br />
                            <input placeholder="08123456789" type="text" name="" id="" />
                            <br />
                            <label htmlFor="">Message</label>
                            <br />
                            <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>{" "}
                </div>
            </div>
        );
    }
}

export default SmartPlatformContactusSection1;
