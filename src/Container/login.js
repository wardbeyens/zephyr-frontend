import React, { Component } from "react";
import { Container } from "react-bootstrap";
import store from "../store";

import { loadUserByUsername } from "../actions";

export default class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      userName: "Cindy5656",
      password: "test1234",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.table(this.state);
    store.dispatch(loadUserByUsername(this.state.userName)).then(() => {
      let storestate = store.getState();
      let user = storestate.user;
      if (user) {
        if (user.password == this.state.password) {
          console.table(user);
          localStorage.setItem("userName", user.userName);
          alert("U bent ingelogd");
        } else {
          alert("wrong password");
        }
      }
    });
  };

  render() {
    return (
      <Container>
        <form className="form" onSubmit={this.handleSubmit}>
          <h3>Log in</h3>

          <div className="form-group">
            <label>userName</label>
            <input
              type="userName"
              id="userName"
              className="form-control"
              placeholder="Enter userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
        </form>
      </Container>
    );
  }
}
