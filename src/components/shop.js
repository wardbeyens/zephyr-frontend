import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

class Shop extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <div>
          <center>
            <h1>Shop</h1>
          </center>
        </div>
        <Row>
          {this.props.clothes.map((clothing, i) => (
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
                {<Button>ADD</Button>}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
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
