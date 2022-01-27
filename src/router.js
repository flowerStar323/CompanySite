import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
//  Home page
const Welcome = lazy(() => import("./pages/FirstPage"));
const ChooseLevel = lazy(() => import("./pages/ChooseLevel"));
const Intro = lazy(() => import("./pages/IntroSelf"));
const IntroCompany = lazy(() => import("./pages/IntroCompany"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const AboutCompany = lazy(() => import("./pages/AboutCompany"));
const Home = lazy(() => import("./pages/Home"));
const PpartnerHome = lazy(() => import("./pages/PpartnerHome"));
const YourCompany = lazy(() => import("./pages/YourCompany"));
const ChattingPage = lazy(() => import("./pages/ChattingPage"));

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/choose" component={ChooseLevel} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/introcompany" component={IntroCompany} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/aboutcompany" component={AboutCompany} />
        <Route exact path="/partner" component={PpartnerHome} />
        <Route exact path="/yourcompany" component={YourCompany} />
        <Route exact path="/chatroom" component={ChattingPage} />
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
