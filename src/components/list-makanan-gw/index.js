import React, { Component } from "react";
import { Grid, Button, Card, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Counter from "../counter/index";

export default class List extends Component {
  state = {
    listmakanan: [
      {
        id: 1,
        number: 0,
        price: 10000,
        nama: "Mie Ayam Telor",
        gambar:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/nasi-goreng.jpg?itok=f6_VrVGC"
      },
      {
        id: 2,
        price: 15000,
        number: 0,
        nama: "Mie Ayam Telor",
        gambar:
          "http://dish.co.nz/media/VERSIONS/images/hero_nasigoreng_article--740x1005.jpg"
      },
      {
        id: 3,
        price: 11000,
        number: 0,
        nama: "Mie Ayam Babat",
        gambar:
          "http://nasikotakbandung.com/wp-content/uploads/2018/02/tumpeng-3.jpg"
      },
      {
        id: 4,
        price: 20000,
        number: 0,
        nama: "Mie ayam Udang",
        gambar:
          "http://www.tokomesin.com/wp-content/uploads/2015/04/nasi-rames-tokomesin1.jpg"
      }
    ],
    total: 0
  };

  tambahkan = harga => {
    this.setState({
      total: this.state.total + harga
    });
    sessionStorage.total = this.state.total + harga;
  };

  hapus = harga => {
    this.setState({
      total: this.state.total - harga
    });
    sessionStorage.total = this.state.total - harga;
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "#ea4504", textAlign: "center" }}>Menu Makanan</h1>
        <br />
        <br />
        <Grid container spacing={24}>
          {this.state.listmakanan.map((item, index) => (
            <Grid item xs={3}>
              <Counter
                nomor={item.number}
                tambahTotalHarga={this.tambahkan}
                kurangTotalHarga={this.hapus}
                gambar={item.gambar}
                indexMakanan={index}
                name={item.nama}
                harga={item.price}
                // number={this.state.number}
              />
            </Grid>
          ))}
        </Grid>
        <br />

        <Button style={{ marginRight: "2px" }}>Kembali</Button>

        <br />
        <br />

        <Card style={{ textAlign: "center" }}>
          <p style={{ fontWeight: "bold" }}>Total Pembayaran</p>
          <h1>{this.state.total}</h1>
          <Button outline color="danger" tag={Link} to="/payment">
            BAYAR
          </Button>
        </Card>
      </div>
    );
  }
}
