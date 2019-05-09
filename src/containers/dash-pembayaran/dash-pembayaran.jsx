import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Col, Row, Table } from "reactstrap";

export default class dashPembayaran extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "90%",
            backgroundColor: "#eeeeee",
            color: "white"
          }}
        >
          <Table>
            <thead style={{ color: "#ea4504" }}>
              <tr>
                <th>Nama Pesanan</th>
                <th>Jumlah Pesanan</th>
                <th>Total Harga </th>
                <th />
              </tr>
            </thead>
            <tbody style={{ color: "#ea4504" }}>
              {this.state.orderan.map(orders => (
                <tr>
                  <td>{orders.nama}</td>
                  <td>{orders.qty} x</td>
                  <td>Rp {orders.price}</td>
                  <td />
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <br />

          <Table>
            <thead style={{ color: "#ea4504" }}>
              <tr>
                <th>Total Pembayaran</th>

                <th />

                <th />
                <th style={{ fontWeight: "bold" }}>: Rp {this.state.total}</th>
                <th />
              </tr>
            </thead>
            <tbody style={{ color: "#ea4504" }}>
              <tr>
                <td />
                <td />
                <td />

                <td />
                <td />
              </tr>
            </tbody>
          </Table>
        </div>
        <br />
        <br />

        <Button
          style={{
            fontWeight: "bold",
            backgroundColor: "#ea4504",
            color: "white",
            outline: "none",
            width: "90%"
          }}
          variant="contained"
          component={Link}
          to="/chekout"
          onClick={this.pay}
        >
          Pay Right Now
        </Button>
      </div>
    );
  }
}
