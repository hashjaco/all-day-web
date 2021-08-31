import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "../views/Products";
import "../styles/sass/styles.scss";

const AppNavigator = () => {
  return (
    <Router>
      <div className="app">
        <nav className="app-navigator">
          <ul>
            <li className="app-nav-link active">
              <Link to="/">THE SOFA</Link>
            </li>
            <li className="app-nav-link">
              <Link to="/reviews">REVIEWS</Link>
            </li>
            <li className="app-nav-link">
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
          <ul className="app-nav-links-right">
            <li className="app-nav-link">
              <Link to="/showroom">SHOWROOM</Link>
            </li>
            <li className="app-nav-link">
              <Link to="/swatches">SWATCHES</Link>
            </li>
          </ul>
          <div id="logo">
            <Link to="/">
              <img src="/all-day-logo.png" alt="All Day Logo" />
            </Link>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <div />
          </Route>
          <Route path="/reviews">
            <div />
          </Route>
          <Route path="/showroom">
            <div />
          </Route>
          <Route path="/swatches">
            <div />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppNavigator;
