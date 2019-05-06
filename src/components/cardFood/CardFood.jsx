import React, { Component } from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";

export default class CardFood extends Component {
  render() {
    const { id, nama, harga, gambar } = this.props;
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            height="200"
            src={gambar}
            alt="Card image cap"
          />
          <CardBody>
            <center>
              <h1>{nama}</h1>
              <p> Harga : {harga}</p>
              <p>jumlah :</p>
              <h4>{this.props.qty}</h4>
              <h1 />
              <Button
                outline
                style={{
                  width: 100
                }}
                style={{ backgroundColor: "#ea4504" }}
                onClick={this.props.kurang}
                color="white"
              >
                Kurang
              </Button>
              <Button
                outline
                style={{ width: 100 }}
                onClick={this.props.tambah}
                style={{ backgroundColor: "#ea4504" }}
                color="white"
              >
                Tambah
              </Button>{" "}
            </center>
          </CardBody>
        </Card>
      </div>
    );
  }
}
