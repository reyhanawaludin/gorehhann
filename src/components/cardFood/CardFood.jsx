import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
export default class CardFood extends Component {
  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Card
          className="cardR"
          style={{ maxWidth: 300, maxHeight: 500, borderRadius: 5 }}
        >
          <CardImg
            style={{ height: 200, width: 299 }}
            src={this.props.gambar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>
              {this.props.name}
            </CardTitle>
            <CardSubtitle>Harga : Rp. {this.props.harga}</CardSubtitle>
            <CardTitle>
              <p>Jumlah : {this.props.qty}</p>
            </CardTitle>
            <Button
              style={{
                color: "white",
                backgroundColor: "#ea4504",
                marginTop: 30,
                marginRight: 10,
                justifyContent: "center"
              }}
              onClick={this.props.minus}
              variant="contained"
            >
              Hapus
            </Button>
            <Button
              style={{
                backgroundColor: "#ea4504",
                color: "white",
                marginTop: 30,
                marginLeft: 10,
                justifyContent: "center"
              }}
              onClick={this.props.plus}
              variant="contained"
            >
              Tambahkan
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
