import React, { Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: this.props.item.uuid,
      name: this.props.item.name,
      brand: this.props.item.brand,
      price: this.props.item.price,
      color: this.props.item.color,
      size: this.props.item.size,
      gender: this.props.item.gender,
      type: this.props.item.type,
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
          <div className="control-buttons">
            <button className="edit">Update</button>
          </div>
          <br />
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
