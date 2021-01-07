import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

class Shop extends Component {
  state = {
    clothes: [],
  };

  componentDidMount() {
    let url = "https://zephyr.wabyte.com/clothes/";

    var promise = axios.get(url);
    promise
      .then((resp) => {
        this.setState({ clothes: resp.data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <Container>
        <div>
          <center>
            <h1>Shop</h1>
          </center>
        </div>
        <Row>
          {this.state.clothes.map((clothing, i) => (
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
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Shop;
