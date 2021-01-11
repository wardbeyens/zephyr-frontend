// src/App.js

import React, { Component } from "react";
import {
  Switch,
  Route,
  BrowserRouter,
  NavLink,
  NavNavLink,
} from "react-router-dom";

import Shop from "./Container/shop";
import Basket from "./Container/basket";

import { Navbar, Nav } from "react-bootstrap";
import Login from "./Container/login";
import SignUp from "./Container/signup";

import store from "./store";

import { loadClothes, loadUserByUsername } from "./actions";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Zephyr</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Shop</Nav.Link>
        <Nav.Link href="/basket">Basket</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const Main = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Shop} />
      <Route path="/basket" component={Basket} />
      <Route path="/login" component={Login} />
      {/* <Route path="/signup" component={SignUp} /> */}
    </Switch>
  </div>
);

const App = () => {
  store.dispatch(loadClothes());
  let userName = localStorage.getItem("userName");
  if (userName !== null) {
    store.dispatch(loadUserByUsername(userName));
  }

  // store.dispatch(loadManufacturers());
  // store.dispatch(loadCategories());

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default App;
