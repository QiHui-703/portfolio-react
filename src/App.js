import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./component/home-page";
import LandingPage from "./component/landing-page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
