import React, { Component } from "react";

class CreateForm extends Component {
  initState = {};

  constructor(props) {
    super();
    this.initState = {
      name: "NewClothingName",
      brand: "MyPersonalBrand",
      price: 45.99,
      color: "",
      size: "",
      gender: "",
      type: "",
    };

    this.state = this.initState;
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleChangeInt = (event) => {
    this.setState({ [event.target.id]: parseInt(event.target.value) });
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Clothing</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            className="form-control"
            id="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="brand"
            type="text"
            placeholder="brand"
            value={this.state.brand}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="price"
            type="number"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="color"
            type="text"
            placeholder="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="size"
            type="text"
            placeholder="size"
            value={this.state.size}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="gender"
            type="text"
            placeholder="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            className="form-control"
            id="type"
            type="text"
            placeholder="type"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <br />
          <button>Create</button>
          <br />
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
