import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import B from "../Screens/B";
import C from "../Screens/C";
import Massage from "../Screens/Massage";
import Footer from "./Footer";

export default () => (
  <Router>
    <Footer />
    <Route path="/Massage" component={Massage} />
    <Route path="/B" component={B} />
    <Route path="/C" component={C} />
  </Router>
);
