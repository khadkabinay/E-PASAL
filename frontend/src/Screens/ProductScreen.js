import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
import Message from "../Components/Message";
import Meta from "../Components/Meta";
import {
  Image,
  Col,
  Row,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  Card,
} from "react-bootstrap";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview, errorProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(match.params.id, { rating, comment }));
  };

  return (
    <>
      <Button className="mt-3">
        <Link to="/">Go Back</Link>
      </Button>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <Meta title={product.name} />
          <Card className="pt-3" variant="flush">
            <Col md={4}>
              <Image src={product.image} fluid />
            </Col>
            <Col md={6}>
              <Row>Name : {product.name}</Row>
              <Row>Description: {product.description}</Row>
              <Row>Price: {product.price}</Row>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reveiews`}
              />
              <ListGroup>
                <ListGroupItem> price: {product.price}</ListGroupItem>
                <ListGroupItem>
                  Status:{" "}
                  {product.countInStock === 0 ? "Out Of Stock" : "In Stock"}
                </ListGroupItem>
                {product.countInStock > 0 && (
                  <ListGroupItem>
                    Qty:
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </ListGroupItem>
                )}
                <Button
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup>
            </Col>
          </Card>
        </>
      )}

      <Col md={6}>
        <h2>Reviews</h2>
        {product.reviews.length === 0 && <Message>No Reviews</Message>}
        <ListGroup variant="flush">
          {product.reviews.map((review) => (
            <ListGroup.Item key={review._id}>
              <strong>{review.name}</strong>
              <Rating value={review.rating} />
              <p>{review.createdAt.substring(0, 10)}</p>
              <p>{review.comment}</p>
            </ListGroup.Item>
          ))}

          <ListGroup.Item>
            <h2>Write a Customer Review</h2>
            {errorProductReview && (
              <Message variant="danger">{errorProductReview}</Message>
            )}

            {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as="select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    row="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            ) : (
              <Message>
                Please <Link to="/login">sign in</Link> to write a review
              </Message>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
};

export default ProductScreen;
