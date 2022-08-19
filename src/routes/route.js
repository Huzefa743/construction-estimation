import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../component/Screens/Home";


const Routing = () => (
  <Router basename="/">
    <Switch>
    
      <Route exact path="/" component={Home} />
      
     
    </Switch>
  </Router>
);
export default Routing;
