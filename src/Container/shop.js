import React, { Component } from "react";
import { connect } from "react-redux";
import Shops from "../Components/Shop/Shop";
import { Container, Row, Col, Button } from "react-bootstrap";

class Shop extends Component {
    constructor(props) {
        super();
        this.state={
           orders:[],
            shop: true,
        }
    }
  componentDidMount() {}


  addToCart=(uuid, amount)=>{
      this.setState({orders: [...this.state.orders,{uuid, amount}]})

  }

  render() {
        console.log(this.state.orders)
 
    return (

     <Shops items={this.props} add={this.addToCart}/>
    );
  }
}

const mapStateToProps = (state) => {
  // mapStateToProps: mapping of the props with the state
  return {
    user: state.user,
    clothes: state.clothes,
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  // mapDispatchToProps: mapping of the eventhandlers with dispatch
  return {
    // onLoadRobots: () => dispatch(loadRobots()),
    // onLoadCategories: () => dispatch(loadCategories()),
    // onLoadManufacturers: () => dispatch(loadManufacturers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
