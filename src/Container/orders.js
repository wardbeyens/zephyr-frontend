/* eslint-disable eqeqeq */
import React, { Component } from "react";
import myApi from "../apis/zephyr_api";
import Index from "../Components/Orders/index";

class Orders extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
      users: [],
      clothes: [],
    };
  }

  load() {
    myApi.getAllClothes().then(
      (result) => {
        console.table(result.data);
        this.setState({ clothes: result.data });
      },
      (error) => {
        throw error;
      }
    );
    myApi.getAllUsers().then(
      (result) => {
        console.table(result.data);
        this.setState({ users: result.data });
      },
      (error) => {
        throw error;
      }
    );
    myApi.getAllOrders().then(
      (result) => {
        console.table(result.data);
        this.setState({ orders: result.data });
      },
      (error) => {
        throw error;
      }
    );
  }

  componentDidMount() {
    this.load();
  }

  onCreate = (order) => {
    return myApi.createOrder(order).then(
      (result) => {
        this.load();
      },
      (error) => {
        throw error;
      }
    );
  };

  onEdit = (order) => {
    const indexToEdit = this.state.orders.findIndex((u) => {
      return u.uuid == order.uuid;
    });
    let orders = this.state.orders;
    orders[indexToEdit].isEditing = true;
    this.setState({ orders: orders });
  };

  onUpdate = (order) => {
    myApi
      .updateOrder(order)
      .then(
        (result) => {
          this.load();
        },
        (error) => {
          throw error;
        }
      )
      .this.load();
  };

  onDelete = (order) => {
    return myApi.deleteOrder(order.uuid).then(
      (result) => {
        this.load();
      },
      (error) => {
        throw error;
      }
    );
  };

  render() {
    return (
      <div>
        <Index
          orders={this.state.orders}
          users={this.state.users}
          clothes={this.state.clothes}
          onCreate={this.onCreate}
          onEdit={this.onEdit}
          onUpdate={this.onUpdate}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default Orders;
