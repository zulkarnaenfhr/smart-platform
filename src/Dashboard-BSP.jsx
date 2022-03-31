import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Smartplatformlandingpage from "./container/1. Smart-Platform/Smart-Platform-LandingPage/SmartPlatformLandingPage";

class DashboardBsp extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/smart-platform/" exact element={<Smartplatformlandingpage />} />
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
