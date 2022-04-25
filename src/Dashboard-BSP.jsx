import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Smartplatformcontactus from "./container/1. Smart-Platform/Smart-Platform-ContactUs/SmartPlatformContactUs";
import Smartplatformfaq from "./container/1. Smart-Platform/Smart-Platform-FAQ/SmartPlatformFAQ";
import Smartplatformlandingpage from "./container/1. Smart-Platform/Smart-Platform-LandingPage/SmartPlatformLandingPage";
import Smartplatformsolution from "./container/1. Smart-Platform/Smart-Platform-Solution/SmartPlatformSolution";
import Bigviewaboutcompany from "./container/2. BigView/BigView-AboutCompany/BigViewAboutCompany";
import Bigviewaboutus from "./container/2. BigView/BigView-AboutUs/BigViewAboutUs";
import Bigviewblog from "./container/2. BigView/BigView-Blog/BigViewBlog";
import Bigviewcontactus from "./container/2. BigView/BigView-ContactUs/BigViewContactUs";
import Bigviewdocumentation from "./container/2. BigView/BigView-Documentation/BigViewDocumentation";
import Bigviewfaq from "./container/2. BigView/BigView-FAQ/BigViewFAQ";
import Bigviewlandingpage from "./container/2. BigView/BigView-LandingPage/BigViewLandingPage";
import Bigviewlogin from "./container/2. BigView/BigView-Login/BigViewLogin";
import Bigviewpartnership from "./container/2. BigView/BigView-Partnership/BigViewPartnership";
import Bigviewpress from "./container/2. BigView/BigView-Press/BigViewPress";
import Bigviewsupport from "./container/2. BigView/BigView-Support/BigViewSupport";
import BigscoreAboutcompany from "./container/3. BigScore/BigScore-AboutCompany/BigScore-AboutCompany";
import Bigscoreaboutus from "./container/3. BigScore/BigScore-AboutUs/BigScoreAboutUs";
import BigscoreBlog from "./container/3. BigScore/BigScore-Blog/BigScore-Blog";
import BigscoreDocumentation from "./container/3. BigScore/BigScore-Documentation/BigScore-Documentation";
import BigscoreFaq from "./container/3. BigScore/BigScore-FAQ/BigScore-FAQ";
import Bigscorelandingpage from "./container/3. BigScore/BigScore-LandingPage/BigScoreLandingPage";
import BigscorePartnership from "./container/3. BigScore/BigScore-Partnership/BigScore-Partnership";
import BigscorePress from "./container/3. BigScore/BigScore-Press/BigScore-Press";
import BigscoreSupport from "./container/3. BigScore/BigScore-Support/BigScore-Support";
import "./style.css";

class DashboardBsp extends Component {
    render() {
        return (
            <div>
                <Routes>
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
                    <Route path="/big-view/support" exact element={<Bigviewsupport />} />
                    <Route path="/big-view/aboutcompany" exact element={<Bigviewaboutcompany />} />
                    <Route path="/big-view/blog" exact element={<Bigviewblog />} />
                    <Route path="/big-view/press" exact element={<Bigviewpress />} />
                    {/* big score platform  */}
                    <Route path="/big-score" exact element={<Bigscorelandingpage />} />
                    <Route path="/big-score/aboutus" exact element={<Bigscoreaboutus />} />
                    <Route path="/big-score/partnership" exact element={<BigscorePartnership />} />
                    <Route path="/big-score/documentation" exact element={<BigscoreDocumentation />} />
                    <Route path="/big-score/support" exact element={<BigscoreSupport />} />
                    <Route path="/big-score/aboutcompany" exact element={<BigscoreAboutcompany />} />
                    <Route path="/big-score/blog" exact element={<BigscoreBlog />} />
                    <Route path="/big-score/press" exact element={<BigscorePress />} />
                    <Route path="/big-score/faq" exact element={<BigscoreFaq />} />
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
