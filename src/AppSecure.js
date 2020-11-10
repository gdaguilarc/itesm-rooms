import React from "react";
import { Route, Switch } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Appointments from "./components/Appointments";

import "./App.css";

function AppSecure() {
  return (
    <Switch>
      <Route exact path="/app/appointments" component={Appointments} />
    </Switch>
  );
}

export default withAuthenticator(AppSecure);
