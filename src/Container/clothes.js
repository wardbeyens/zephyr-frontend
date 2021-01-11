/* eslint-disable eqeqeq */
import React, { Component } from "react";
import myApi from "../apis/zephyr_api";
import Index from "../Components/Clothes/index";

class Clothes extends Component {
  constructor(props) {
    super();
    this.state = {
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
  }

  componentDidMount() {
    this.load();
  }

  onCreate = (clothing) => {
    return myApi.createClothes(clothing).then(
      (result) => {
        this.load();
      },
      (error) => {
        throw error;
      }
    );
  };

  onEdit = (clothing) => {
    const indexToEdit = this.state.clothes.findIndex((u) => {
      return u.uuid == clothing.uuid;
    });
    let clothes = this.state.clothes;
    clothes[indexToEdit].isEditing = true;
    this.setState({ clothes: clothes });
  };

  onUpdate = (clothing) => {
    myApi.updateClothes(clothing).then(
      (result) => {
        this.load();
      },
      (error) => {
        throw error;
      }
    );
  };

  onDelete = (clothing) => {
    return myApi.deleteClothes(clothing).then(
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
          data={this.state.clothes}
          onCreate={this.onCreate}
          onEdit={this.onEdit}
          onUpdate={this.onUpdate}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default Clothes;
