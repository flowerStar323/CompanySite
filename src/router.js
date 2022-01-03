import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
//  Home page
const Welcome = lazy(() => import("./pages/FirstPage"));
const SecondPage = lazy(() => import("./pages/SecondPage"));
const ThrPage = lazy(() => import("./pages/ThrPage"));
const FourthPage = lazy(() => import("./pages/FourthPage"));

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/sec" component={SecondPage} />
        <Route exact path="/thr" component={ThrPage} />
        <Route exact path="/for" component={FourthPage} />
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
