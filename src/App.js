import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Products from "./pages"
import Product from "./pages/time"
import Product3 from "./pages/data"
import Product4 from "./pages/currency"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Products /></Route>
        <Route path="/time"><Product /></Route>
        <Route path="/data"><Product3 /></Route>
        <Route path="/currency"><Product4 /></Route>

      </Switch>
    </Router>
  );
}

export default App;
