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
export default class cardResto extends Component {
  render() {
    const { image, lokasi, name, id } = this.props.item;
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
            src={image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>{name}</CardTitle>
            <CardSubtitle>{lokasi}</CardSubtitle>
            <Link to={`/restos/${id}`}>
              <Button
                color="secondary"
                style={{
                  marginTop: 20,
                  backgroundColor: "#ea4504",
                  color: "white"
                }}
                tag={Link}
                onClick={this.props.Choice}
                variant="contained"
              >
                Pesan
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}
