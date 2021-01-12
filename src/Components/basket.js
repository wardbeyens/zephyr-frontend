import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

const Baskets = (props) => {
    console.log(props.orders)
    let totaal = 0;
    var output = '';
    output = props.orders.filter(order => order.user.uuid.includes(props.user)).map((prevOrder,i)=>{
        return(
            <div>
                <ul>
                    <li>{prevOrder.uuid}</li>
                </ul>
            </div>
        )
    })
    return (
        <div>
            <hr/>
            {output}
            <h3>Totaal: {totaal}</h3>
            <button >Bestellen</button>

        </div>
    )

}
export default Baskets;
