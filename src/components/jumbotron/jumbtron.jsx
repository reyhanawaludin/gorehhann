import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
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
    flexGrow: 2
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
      <Grid container spacing={24}>
        <Grid item sm={12}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#ea4504", color: "white" }}
          >
            <h2>Anda lapar? GO-REHHANN aja!!!</h2>
            <p>
              dengan GO-REHHANN kamu bisa mencari makanan yang kamu inginkan!!!
            </p>
          </Paper>
        </Grid>

        <Grid item xm={12} sm={6}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#ea4504" }}
          >
            <img src={Gohan} style={{ width: "75%", height: "105%" }} />
            <Link to="/restos">
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
        </Grid>
        <Grid item xm={12} sm={6}>
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
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
