import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import { Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";




const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
