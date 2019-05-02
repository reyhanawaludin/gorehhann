import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Grid";
import Gohan from "../assests/gohan.png";
import Gocar from "../assests/gocar.jpeg";
import Rehann from "../assests/rehhhann.png";
import Gohann from "../assests/rehan.png";
import Gofood from "../assests/gofd.png";
import Grab from "../assests/0.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card container spacing={24}>
        <Card item xs={12}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#ea4504", color: "white" }}
          >
            <h2>Anda lapar? GO-REHHANN aja!!!</h2>
            <p>
              dengan GO-REHHANN kamu bisa mencari makanan yang kamu inginkan
              lho!
            </p>
          </Paper>
        </Card>

        <Card item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#ea4504" }}
          >
            <img src={Gohan} style={{ width: "75%", height: "105%" }} />
            <Link to="/gorehhan">
              <Button
                style={{
                  backgroundColor: "white",
                  width: "93%",
                  color: "#ea4504"
                }}
              >
                <h4>Pesan</h4>
              </Button>
            </Link>
          </Paper>
        </Card>
        <Card item xs={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#93e21c" }}
          >
            <img src={Gohann} style={{ width: "75%", height: "105%" }} />
            <Button
              style={{
                backgroundColor: "white",
                width: "93%",
                height: "1%",
                color: "#93e21c"
              }}
            >
              <h4>Pesan</h4>
            </Button>
          </Paper>
        </Card>
        <Card item xs={6} sm={3}>
          <Paper className={classes.paper}>
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
        </Card>
        <Card item xs={6} sm={3}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#009e39" }}
          >
            <img src={Grab} style={{ width: "75%", height: "105%" }} />
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
        </Card>
        <Card item xs={6} sm={3}>
          <Paper className={classes.paper}>
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
        </Card>
        <Card item xs={6} sm={3}>
          <Paper className={classes.paper}>
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
        </Card>
      </Card>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
