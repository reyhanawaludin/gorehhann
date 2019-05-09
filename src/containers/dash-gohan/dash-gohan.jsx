import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Gocar from "../../components/assests/gocar.jpeg";
import Rehann from "../../components/assests/rehhhann.png";
import Gohann from "../../components/assests/rehan.png";
import Gofood from "../../components/assests/gofd.png";
import Grab from "../../components/assests/0.png";

export default class dashGohan extends Component {
  render() {
    return (
      <div>
        <Grid item xm={6} sm={3}>
          <Paper>
            <img src={Rehann} style={{ width: "75%", height: "105%" }} />
            <Button
              style={{
                backgroundColor: "#ea4504",
                width: "93%",
                height: "1%",
                color: "white"
              }}
            >
              Pesan
            </Button>
          </Paper>
        </Grid>
        <Grid item xm={6} sm={3}>
          <Paper style={{ backgroundColor: "#009e39" }}>
            <img src={Grab} style={{ width: "75%", height: "105%" }} />
            <Button
              style={{
                backgroundColor: "#ea4504",
                width: "100%",
                height: "1%",
                color: "white"
              }}
            >
              Pesan
            </Button>
          </Paper>
        </Grid>
        <Grid item xm={6} sm={3}>
          <Paper>
            <img src={Gofood} style={{ width: "100%", height: "105%" }} />
            <Button
              style={{
                backgroundColor: "#ea4504",
                width: "93%",
                height: "1%",
                color: "white"
              }}
            >
              Pesan
            </Button>
          </Paper>
        </Grid>
        <Grid item xm={6} sm={3}>
          <Paper>
            <img src={Gocar} style={{ width: "108%", height: "185%" }} />
            <Button
              style={{
                backgroundColor: "#ea4504",
                width: "93%",
                height: "1%",
                color: "white"
              }}
            >
              Pesan
            </Button>
          </Paper>
        </Grid>
      </div>
    );
  }
}
