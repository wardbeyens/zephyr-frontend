import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

const Shop = (props) => {
    return (
        <div>
            <Container>
                <div>
                    <center>
                        <h1>Shop</h1>
                    </center>
                </div>
                <Row>
                    {props.items.clothes.map((clothing, i) => {
                        return(
                        <Col>
                            <div key={i} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{clothing.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {clothing.brand}
                                    </h6>
                                    <p className="card-text">{clothing.color}</p>
                                    <p className="card-text">{clothing.gender}</p>
                                    <p className="card-text">{clothing.size}</p>
                                    <p className="card-text">{clothing.type}</p>
                                    <p className="card-text">{clothing.price}</p>
                                </div>
                                {<Button onClick={() => props.add(1, clothing, clothing.uuid)} >ADD</Button>}
                            </div>
                        </Col>
                        )} )}
                </Row>
            </Container>
        </div>
    );
}

export default Shop;
