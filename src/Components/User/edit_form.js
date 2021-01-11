import React, { Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: this.props.item.uuid,
      userName: this.props.item.userName,
      firstName: this.props.item.firstName,
      lastName: this.props.item.lastName,
      email: this.props.item.email,
      password: this.props.item.password,
      streetName: this.props.item.streetName,
      number: this.props.item.number,
      postalCode: this.props.item.postalCode,
      city: this.props.item.city,
      phoneNumber: this.props.item.phoneNumber,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <div className="post">
        <form className="form" onSubmit={this.handleSubmit}>
          <p>{this.state.uuid}</p>
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
          <div className="control-buttons">
            <button className="edit">Update</button>
          </div>
        </form>
      </div>
    );
  }
  handleSubmit = (event) => {
    this.props.onUpdate(this.state);
    event.preventDefault();
  };
}

export default EditForm;
