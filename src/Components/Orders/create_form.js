import React, { Component } from "react";

class CreateForm extends Component {
  initState = {};

  constructor(props) {
    super(props);
    this.initState = {
      userID: props.users[0]?.uuid,
      purchaseList: [
        {
          amount: 1,
          clothes: props.clothes[0]?.uuid,
        },
      ],
    };

    this.state = this.initState;
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleChangeInt = (event) => {
    this.setState({ [event.target.id]: parseInt(event.target.value) });
  };

  handleChangeAmount = (event) => {
    let purchaseList = this.state.purchaseList;
    purchaseList[0].amount = event.target.value;
    this.setState({ purchaseList: purchaseList });
  };

  handleChangeclothes = (event) => {
    let purchaseList = this.state.purchaseList;
    purchaseList[0].clothes = event.target.value;
    this.setState({ purchaseList: purchaseList });
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Clothing</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <select
            value={this.state.userID}
            className="form-control"
            id="userID"
            onChange={this.handleChange}
          >
            {this.props.users.map((user, i) => (
              <option value={user.uuid} key={i}>
                {user.userName}
              </option>
            ))}
          </select>
          <br />

          <input
            required
            className="form-control"
            id="amount"
            type="number"
            placeholder="amount"
            value={this.state.purchaseList.amount}
            onChange={this.handleChangeAmount}
          />

          <br />

          <select
            value={this.state.purchaseList.clothes}
            className="form-control"
            id="clothes"
            onChange={this.handleChangeclothes}
          >
            {this.props.clothes.map((clothing, i) => (
              <option value={clothing.uuid} key={i}>
                {clothing.name}
              </option>
            ))}
          </select>
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
