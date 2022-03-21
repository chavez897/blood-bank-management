import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutScreen } from "../components/home/AboutScreen";

import { HomeScreen } from "../components/home/HomeScreen";
import { NavBar } from "../components/ui/NavBar";

export const SystemRouter = () => {
  return (
  <div>
    <NavBar />
    <div className="container mx-auto">
      <Switch>
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/about" component={AboutScreen} />

        <Redirect to="/home" />
      </Switch>
    </div>
  </div>
  );
};
