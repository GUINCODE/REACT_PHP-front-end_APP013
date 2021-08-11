import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Update from "./components/Update";
import Ajout from "./components/Ajout";
import View from "./components/View";
import Wellcome from "./components/Wellcome";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Wellcome />

          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                  guincode.gn
                </Link>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  ml-5">
                    {/* <li className="nav-items">
                      <Link to={"/"} className="nav-link">
                        HOME
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link to={"/Ajout"} className="nav-link">
                        New
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/view"} className="nav-link">
                        Users
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <Switch>
                <Route exact path="/Ajout" component={Ajout} />
                <Route exact path="/edit/:id" component={Update} />
                <Route exact path="/view" component={View} />
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
