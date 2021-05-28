import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import Message from "../Components/Message";
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    //makes a refresh and redirects to /cart
    // history.replace("/cart");
  };

  const checkoutHandler = () => history.push(`/login?redirect=shipping`);

  return (
    <>
      <Row>
        <Col>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message> Your cart is empty</Message>
          ) : (
            cartItems.map((item) => (
              <Row key={item.productId} className="cartItem">
                <Col md={2}>
                  <Image src={item.image} fluid rounded />{" "}
                </Col>

                <Col md={2}>{item.name}</Col>
                <Col md={1}>{item.price}</Col>
                <Col md={1}>
                  <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(item.productId, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    onClick={() => removeFromCartHandler(item.productId)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </Col>
              </Row>
            ))
          )}
          <Col md={4}>
            <Card>
              <ListGroup>
                <ListGroupItem>
                  <h3>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h3>
                </ListGroupItem>
                <ListGroupItem>
                  <p>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </p>
                </ListGroupItem>
                <Button type="button" onClick={checkoutHandler}>
                  Proceed to checkout
                </Button>
              </ListGroup>
            </Card>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
