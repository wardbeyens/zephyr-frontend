/* eslint-disable eqeqeq */
import React, { Component } from "react";
import myApi from "../apis/zephyr_api";
import Index from "../Components/User/index";

class Users extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
    };
  }

  load() {
    myApi.getAllUsers().then(
      (result) => {
        console.table(result.data);
        this.setState({ users: result.data });
      },
      (error) => {
        throw error;
      }
    );
  }

  componentDidMount() {
    this.load();
  }

  onCreate = (user) => {
    return myApi.createUser(user).then(
      (result) => {
        this.load();
      },
      (error) => {
        throw error;
      }
    );
  };

  onEdit = (user) => {
    const indexToEdit = this.state.users.findIndex((u) => {
      return u.uuid == user.uuid;
    });
    let users = this.state.users;
    users[indexToEdit].isEditing = true;
    this.setState({ users: users });
  };

  onUpdate = (user) => {
    myApi.updateUser(user).then(
      (result) => {
        console.table(result.data);
        this.load();
      },
      (error) => {
        throw error;
      }
    );
  };

  onDelete = (user) => {
    return myApi.deleteUser(user).then(
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
          data={this.state.users}
          onCreate={this.onCreate}
          onEdit={this.onEdit}
          onUpdate={this.onUpdate}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default Users;
