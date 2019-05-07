import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card";
import { Col, Row } from "reactstrap";
import resto from "../../utils/db";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
export default class Dashresto extends Component {
  componentWillMount() {
    this.setState({
      resto: resto
    });
  }
  state = {
    resto: []
  };
  componentDidMount() {
    console.log(this.state.resto);
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ color: "#ea4504", textAlign: "center" }}>
          Menu Restorant
        </h1>
        <br />
        <br />
        <Row>
          {this.state.resto.map(item => {
            return (
              <Col>
                <Card item={item} />
              </Col>
            );
          })}
        </Row>
        <br/><br/>
        <Link to="/">
          <Button
            style={{
              backgroundColor: "#ea4504",
              color: "white",
              width: "100%"
            }}
          >
            Kembali
          </Button>
        </Link>
      </div>
    );
  }
}
