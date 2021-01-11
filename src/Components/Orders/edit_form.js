import React, { Component } from "react";

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: this.props.item.uuid,
      userID: props.item.userID,
      purchaseList: props.item.purchaseList,
    };
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
      <div className="post">
        <form className="form" onSubmit={this.handleSubmit}>
          <p>{this.state.uuid}</p>
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
