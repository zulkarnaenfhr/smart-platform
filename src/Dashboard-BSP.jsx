import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Smartplatformcontactus from "./container/1. Smart-Platform/Smart-Platform-ContactUs/SmartPlatformContactUs";
import Smartplatformfaq from "./container/1. Smart-Platform/Smart-Platform-FAQ/SmartPlatformFAQ";
import Smartplatformlandingpage from "./container/1. Smart-Platform/Smart-Platform-LandingPage/SmartPlatformLandingPage";
import Smartplatformsolution from "./container/1. Smart-Platform/Smart-Platform-Solution/SmartPlatformSolution";
import Bigviewlandingpage from "./container/2. BigView/BigView-LandingPage/BigViewLandingPage";
import "./style.css";

class DashboardBsp extends Component {
    render() {
        return (
            <div>
                <Routes>
                    {/* <Route path="smart-platform" exact element ={} */}
                    <Route path="/big-view" exact element={<Bigviewlandingpage />} />
                    <Route path="/smart-platform/" exact element={<Smartplatformlandingpage />} />
                    <Route path="/smart-platform/solution" exact element={<Smartplatformsolution />} />
                    <Route path="/smart-platform/contactus" exact element={<Smartplatformcontactus />} />
                    <Route path="/smart-platform/FAQ" exact element={<Smartplatformfaq />} />
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
