import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

const Basket = (props) => {
    let totaal = 0;
    const out = props.items.map((item, i)=>{
        console.log(item)
        let prijs= (parseInt(item.amount) * parseInt(item.clothes.price))
        totaal += prijs;
        return(
            <div key={i}>
                <ul>
                    <li>{item.clothes.name} &emsp; aantal: {item.amount}</li>
                    <li>Prijs: {prijs}</li>
                </ul>
            </div>
        )
    })
    return (
        <div>
            {out}
            <hr/>
            <h3>Totaal: {totaal}</h3>
            <button onClick={()=>props.order()}>Bestellen</button>

        </div>
    )

}
export default Basket;
