import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  Button: {
    marginLeft: "120px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class ListMakanan extends React.Component {
  state = {
    qty: 0
  };

  tambah = () => {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.tambahTotalHarga(this.props.harga);
  };

  kurang = () => {
    if (this.state.qty === 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.kurangTotalHarga(this.props.harga);
  };

  // state = { expanded: false };

  render() {
    // const { classes } = this.props;
    console.log(this.props);

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xm={6} xm={3}>
            <Paper>
              <Card item xm="3" style={{ height: "700px", width: "357px" }}>
                <Link to="/gilawanget">
                  <img src={this.props.gambar} style={{ height: "70%" }} />{" "}
                  <CardMedia image={this.props.gambar} title="Paella dish" />
                </Link>
                <CardContent>
                  <h3 class="card-title" style={{ fontWeight: "bold" }}>
                    {this.props.name}
                  </h3>
                  <p>Harga :Rp{this.props.harga}</p>
                  <p>Jumlah Pesanan :{this.state.qty}</p>{" "}
                  <Button
                    style={{
                      backgroundColor: "#ea4504",
                      Color: "white"
                    }}
                    onClick={this.tambah}
                    size="xm"
                  >
                    Tambahkan{" "}
                  </Button>{" "}
                  <Button
                    style={{
                      marginLeft: 10,
                      backgroundColor: "#ea4504",
                      Color: "white"
                    }}
                    onClick={this.kurang}
                    size="xm"
                  >
                    Hapus
                  </Button>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ListMakanan.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListMakanan);
