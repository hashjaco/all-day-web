import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Products from "../../views/Products";
import DrawerToggleButton from "./DrawerToggleButton";

const SideDrawer = (props) => {
  const numberToAccountingString = (number) => {
    if (typeof number !== "number")
      return console.error("Arguments passed is not of type 'number'");
    return number < 0 ? `(${Math.abs(number)})` : number;
  };

  return (
    <Router>
      <div className="app">
        <nav className="app-navigator">
          <DrawerToggleButton />
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

export default SideDrawer;
