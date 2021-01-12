import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import Baskets from "../Components/basket";
class Basket extends Component {
    constructor(props){
        super();
        this.state = {}

    }


    componentDidMount()
    {
        axios.get("https://zephyr.wabyte.com/orders").then(resp => {
            this.setState(resp.data)
        })

    }

    render() {

        return (
            <div>
                <h1>Alle orders van </h1>
                <Baskets orders={this.state} user={this.props.user.uuid}/>
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
export default connect(mapStateToProps)(Basket);
