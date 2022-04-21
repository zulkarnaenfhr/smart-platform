import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Smartplatformcontactus from "./container/1. Smart-Platform/Smart-Platform-ContactUs/SmartPlatformContactUs";
import Smartplatformfaq from "./container/1. Smart-Platform/Smart-Platform-FAQ/SmartPlatformFAQ";
import Smartplatformlandingpage from "./container/1. Smart-Platform/Smart-Platform-LandingPage/SmartPlatformLandingPage";
import Smartplatformsolution from "./container/1. Smart-Platform/Smart-Platform-Solution/SmartPlatformSolution";
import Bigviewaboutus from "./container/2. BigView/BigView-AboutUs/BigViewAboutUs";
import Bigviewcontactus from "./container/2. BigView/BigView-ContactUs/BigViewContactUs";
import Bigviewdocumentation from "./container/2. BigView/BigView-Documentation/BigViewDocumentation";
import Bigviewfaq from "./container/2. BigView/BigView-FAQ/BigViewFAQ";
import Bigviewlandingpage from "./container/2. BigView/BigView-LandingPage/BigViewLandingPage";
import Bigviewlogin from "./container/2. BigView/BigView-Login/BigViewLogin";
import Bigviewpartnership from "./container/2. BigView/BigView-Partnership/BigViewPartnership";
import "./style.css";

class DashboardBsp extends Component {
    render() {
        return (
            <div>
                <Routes>
                    {/* <Route path="smart-platform" exact element ={} */}
                    <Route path="/smart-platform/" exact element={<Smartplatformlandingpage />} />
                    <Route path="/smart-platform/solution" exact element={<Smartplatformsolution />} />
                    <Route path="/smart-platform/contactus" exact element={<Smartplatformcontactus />} />
                    <Route path="/smart-platform/FAQ" exact element={<Smartplatformfaq />} />
                    {/* big view platform  */}
                    <Route path="/big-view" exact element={<Bigviewlandingpage />} />
                    <Route path="/big-view/FAQ" exact element={<Bigviewfaq />} />
                    <Route path="/big-view/aboutus" exact element={<Bigviewaboutus />} />
                    <Route path="/big-view/contactus" exact element={<Bigviewcontactus />} />
                    <Route path="/big-view/login" exact element={<Bigviewlogin />} />
                    <Route path="/big-view/partnership" exact element={<Bigviewpartnership />} />
                    <Route path="/big-view/documentation" exact element={<Bigviewdocumentation />} />
                    <Route
                        path="*"
                        element={
                            <div id="notfound-page-container">
                                <p>Page Not Found</p>
                            </div>
                        }
                    />{" "}
                </Routes>
            </div>
        );
    }
}

export default DashboardBsp;
