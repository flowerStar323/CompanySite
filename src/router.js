import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
/****site route*****/
//  Home page
const Welcome = lazy(() => import("./pages/FirstPage"));
const Intro = lazy(() => import("./pages/IntroSelf"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Home = lazy(() => import("./pages/Home"));
const PpartnerHome = lazy(() => import("./pages/PpartnerHome"));
const ChattingPage = lazy(() => import("./pages/ChattingPage"));
const Owner = lazy(() => import("./pages/Owner"));
const Referrals = lazy(() => import("./pages/Referrals"));
const Wallet = lazy(() => import("./pages/Wallet"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Withdraw = lazy(() => import("./pages/Withdraw"));
const Profile = lazy(() => import("./pages/Profile"));


const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/partner" component={PpartnerHome} />
        <Route exact path="/chatroom" component={ChattingPage} />
        <Route exact path="/owner" component={Owner} />
        <Route exact path="/referrals" component={Referrals} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/comingsoon" component={ComingSoon} />
        <Route exact path="/withdraw" component={Withdraw} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
