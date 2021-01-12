import React, {Component} from "react";
import {connect} from "react-redux";
import Shops from "../Components/Shop/Shop";
import Basket from "../Components/Shop/Basket";
import * as actions from '../actions/index'
import {Container, Row, Col, Button} from "react-bootstrap";
import axios from "axios";

class Shop extends Component {
    constructor(props) {
        super();
        this.state = {
            orders: [],
            ordering:[],
            shop: true,
        }


    }

    bestellen=()=>{
        console.log(this.state.orders)
        let order = {
            userID: this.props.user.uuid,
            purchaseList: this.state.ordering,
        }
        axios.post("https://zephyr.wabyte.com/order", order).then(resp =>{console.log(resp.data)})
    }

    componentDidMount() {
    }
    goToBasket=()=>{
        if(this.state.shop === true){
            this.setState({shop: false})
        }
        else{
            this.setState({shop:true})
        }
    }

    addToCart = (amount, clothes) => {
        this.setState({orders: [...this.state.orders, {clothes, amount}]})

    }
    addToOrder = (amount, clothes)=>{
        this.setState({ordering:[...this.state.ordering, {amount, clothes}]})
    }
    add = (amount, clothes, uuid) =>{
        this.addToCart(amount, clothes);
        this.addToOrder(amount, uuid)
    }


    render() {
        return (

            <div>
                <div>
                <button onClick={this.goToBasket}>{this.state.shop ? <p>basket</p>:<p>Shop</p>}</button>
            {this.state.shop ? <Shops items={this.props} add={this.add} added={this.addToOrder}/> : <Basket items={this.state.orders} order={this.bestellen}/>}
                </div>
            </div>
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
        onNewOrder: (order) => dispatch(actions.createOrder(order)),
        // onLoadCategories: () => dispatch(loadCategories()),
        // onLoadManufacturers: () => dispatch(loadManufacturers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
