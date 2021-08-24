import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = (props) => {
  return (
    <>
      <Card className="my-4 p-3">
        <Link to={`/product/${props.product._id}`}>
          <Card.Img varient="top" src={props.product.image} />
        </Link>
        <Link to={`/product/${props.product._id}`}>
          <Card.Title>{props.product.name}</Card.Title>
        </Link>
        <Card.Text>
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h4"> $ {props.product.price}</Card.Text>
      </Card>
    </>
  );
};

export default Product;
