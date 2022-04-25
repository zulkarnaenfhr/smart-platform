// import React, { Component } from "react";
// import "./Smart-Platform-LandingPage-Section7.css";

// class SmartPlatformLandingpageSection7 extends Component {
//     render() {
//         return (
//             <div id="SPL-LandingPage-Section7">
//                 <div className="SPL-LandingPage-Section7-Container">
//                     <div className="SPL-LandingPage-Section7-Background-Container">
//                         <img className="SPL-LandingPage-Section7-Background" src={require("../../../../src/Smart-Platform/Landing Page/Section-7-Background.png")} alt="" />
//                     </div>
//                     <div className="SPL-LandingPage-Section7-Text-Container">
//                         <h1 data-aos="fade-up" data-aos-offset="100" className="SPL-LandingPage-Section7-Title">
//                             Embark Your AI Journey with Smart platform Now!
//                         </h1>
//                         <div data-aos="fade-up" data-aos-offset="100">
//                             <button className="SPL-LandingPage-Section7-Contact-Us">Contact Us</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default SmartPlatformLandingpageSection7;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Smart-Platform-LandingPage-Section7.css";

class SmartPlatformLandingpageSection7 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section7">
                <div className="SPL-LandingPage-Section7-Text-Container">
                    <h1 className="SPL-LandingPage-Section7-Title">Embark Your AI Journey with Smart platform Now!</h1>
                    <Link
                        className="SPL-LandingPage-Section7-Button-Container"
                        to={{
                            pathname: `/smart-platform/contactus`,
                        }}
                    >
                        <button className="SPL-LandingPage-Section7-Button">Contact Us</button>
                    </Link>
                </div>{" "}
                <div className="SPL-LandingPage-Section7-Background-Container">
                    <img className="SPL-LandingPage-Section7-Background1" src={require("../../../../src/Smart-Platform/Landing Page/Section-7-Background.png")} alt="" />
                    <div className="SPL-LandingPage-Section7-Background2-Container">
                        <img className="SPL-LandingPage-Section7-Background2" src={require("../../../../src/Smart-Platform/Landing Page/Section-7-Background2.png")} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection7;
