import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BloodBankScreen } from "../components/bloodBanck/BloodBankScreen";
import { DonorScreen } from "../components/donors/DonorScreen";

import { RecipientScreen } from "../components/recipient/RecipientScreen";
import { TransfusionScreen } from "../components/transfusion/TransfusionScreen";
import { NavBar } from "../components/ui/NavBar";

export const SystemRouter = () => {
  return (
  <div>
    <NavBar />
    <div className="container mx-auto">
      <Switch>
        <Route exact path="/donors" component={DonorScreen} />
        <Route exact path="/recipients" component={RecipientScreen} />
        <Route exact path="/blood-bank" component={BloodBankScreen} />
        <Route exact path="/transfusion" component={TransfusionScreen} />

        <Redirect to="/donors" />
      </Switch>
    </div>
  </div>
  );
};
