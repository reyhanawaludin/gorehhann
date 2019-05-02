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
  card: {
    maxWidth: 500,
    maxHeight: 600
  },
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

class Restaurant extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1 style={{ color: "#ea4504", textAlign: "center" }}>Menu Restoran</h1>
        <br />
        <br />
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              {" "}
              <Card className={classes.card}>
                <Link to="/gilawanget">
                  <CardMedia
                    className={classes.media}
                    image="https://cdn.sribu.com/assets/media/contest_detail/2017/6/kontes-design-logo-untuk-warung-nasi-goreng-59361c92faaa261386ca3190/e674c12676.jpg"
                    title="Warung Gila Wanget"
                  />
                </Link>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      WGW
                    </Avatar>
                  }
                  title="Warung Gila Wanget"
                  subheader="JL.Bulu Stalan 1 NO 27 Semarang Selatan"
                />
              </Card>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://www.kiplinger.com/kipimages/pages/17130.jpg"
                  title="Mac Donnals"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      McD
                    </Avatar>
                  }
                  title="Mc Donnal's"
                  subheader="JL.Manyaran NO 29 Gn.Pati "
                />
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://ayamgepukmalaysia.files.wordpress.com/2017/08/screenshot_20170907-194554.jpg?w=1400"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      BK
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://ayamgepukmalaysia.files.wordpress.com/2017/08/screenshot_20170907-194554.jpg?w=1400"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      BK
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              {" "}
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.sribu.com/assets/media/contest_detail/2017/6/kontes-design-logo-untuk-warung-nasi-goreng-59361c92faaa261386ca3190/e674c12676.jpg"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      McD
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
              </Card>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://www.kiplinger.com/kipimages/pages/17130.jpg"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://ayamgepukmalaysia.files.wordpress.com/2017/08/screenshot_20170907-194554.jpg?w=1400"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      BK
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://ayamgepukmalaysia.files.wordpress.com/2017/08/screenshot_20170907-194554.jpg?w=1400"
                  title="Paella dish"
                />
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      BK
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Restaurant.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Restaurant);
