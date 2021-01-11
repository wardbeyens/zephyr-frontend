import React, { Component } from "react";

class CreateForm extends Component {
  initState = {};

  constructor(props) {
    super();
    this.initState = {
      userName: "NewUserName",
      firstName: "FirstName",
      lastName: "LatName",
      email: "newUser@thomasmore.be",
      password: "test1234",
      streetName: "",
      number: "",
      postalCode: "",
      city: "",
      phoneNumber: "",
    };

    this.state = this.initState;
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create User</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            className="form-control"
            id="userName"
            type="text"
            placeholder="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="firstName"
            type="text"
            placeholder="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="lastName"
            type="text"
            placeholder="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="email"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="password"
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="streetName"
            type="text"
            placeholder="streetName"
            value={this.state.streetName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="number"
            type="text"
            placeholder="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="postalCode"
            type="text"
            placeholder="postalCode"
            value={this.state.postalCode}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="city"
            type="text"
            placeholder="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="phoneNumber"
            type="text"
            placeholder="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <br />
          <button>Create</button>
        </form>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.table(this.state);
    this.props.onCreate(this.state);
    this.setState(this.initState);
  };
}

export default CreateForm;
