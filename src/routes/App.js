import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Register from "../containers/Register";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
